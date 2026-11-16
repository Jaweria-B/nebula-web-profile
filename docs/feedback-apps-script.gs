/**
 * Booking + feedback backend (Google Apps Script).
 * Paste this into Extensions > Apps Script of your feedback Google Sheet.
 * See docs/feedback-setup.md for the full steps.
 *
 * Flow:
 *  1. Someone sends a call request from the website -> a row in "Requests",
 *     and you get an email with a link to review it.
 *  2. You approve (and can change the time) -> a Google Calendar event with a
 *     Google Meet link is created and the person gets the invite.
 *  3. After the meeting ends -> they get the feedback email. The form opens
 *     with their name, role and session type filled in.
 *  4. Their answers go to "Feedback". Tick "Approved" to show one on the site.
 */
const FEEDBACK_SHEET = "Feedback";
const FEEDBACK_HEADERS = ["Timestamp", "Name", "Role", "Rating", "Message", "Session type", "Approved", "Email", "Booking ID"];
const REQUESTS_SHEET = "Requests";
const REQUESTS_HEADERS = [
  "Requested at", "ID", "Name", "Email", "Role", "Session type", "Date", "Time",
  "Time zone", "Duration", "Message", "Status", "Meeting time", "Event ID", "Feedback emailed",
];
// Column numbers in the Requests tab (1 = A).
const R = { ID: 2, NAME: 3, EMAIL: 4, ROLE: 5, TYPE: 6, DATE: 7, TIME: 8, TZ: 9, DURATION: 10, MESSAGE: 11, STATUS: 12, MEETING: 13, EVENT: 14, FEEDBACK: 15 };

// Only needed if this script was NOT created from the sheet's
// Extensions > Apps Script menu: paste the sheet's ID here (the long code in
// the sheet's address between /d/ and /edit).
const SHEET_ID = "";

// Your website's feedback page:
const FEEDBACK_URL = "https://jaweria-batool.vercel.app/feedback";
// Only calendar events whose title contains this tag get a feedback email.
// Approved bookings get it automatically.
const SESSION_TAG = "[Session]";
// Session types recognised in the event title, e.g. "[Session] Mentoring with Ali".
const SESSION_TYPES = ["Mentoring", "Collaboration", "Consultation"];
const YOUR_NAME = "Jaweria";
// Where new booking requests are emailed. Empty = the Google account running this script.
const NOTIFY_EMAIL = "";
// Only used if the "Google Calendar API" service isn't added (see the setup
// guide): your own reusable Google Meet link, e.g. "https://meet.google.com/abc-defg-hij".
const MEET_LINK = "";

// ---------------------------------------------------------------- helpers

function spreadsheet_() {
  const ss =
    SpreadsheetApp.getActiveSpreadsheet() ||
    (SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : null);
  if (!ss) {
    throw new Error(
      "This script isn't linked to a Google Sheet. Create it from the sheet " +
        "(Extensions > Apps Script) or set SHEET_ID at the top."
    );
  }
  return ss;
}

// Returns the tab, creating it (or adding missing header cells) if needed.
function tab_(name, headers) {
  const ss = spreadsheet_();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    return sheet;
  }
  const current = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  headers.forEach((h, i) => {
    if (current[i] === "") sheet.getRange(1, i + 1).setValue(h);
  });
  return sheet;
}

function getSheet_() {
  return tab_(FEEDBACK_SHEET, FEEDBACK_HEADERS);
}

function requestsSheet_() {
  return tab_(REQUESTS_SHEET, REQUESTS_HEADERS);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function clean_(v, max) {
  return String(v == null ? "" : v).trim().slice(0, max);
}

function esc_(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// The row just below the last entry. Empty rows that only hold an unticked
// checkbox don't count, so new rows never land far down the sheet.
function nextEmptyRow_(sheet) {
  const last = sheet.getLastRow();
  if (last < 2) return 2;
  const stamps = sheet.getRange(1, 1, last, 1).getValues();
  let row = last;
  while (row > 1 && stamps[row - 1][0] === "") row--;
  return row + 1;
}

function withLock_(fn) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    return fn();
  } finally {
    lock.releaseLock();
  }
}

function newId_() {
  return Utilities.getUuid().replace(/-/g, "").slice(0, 12);
}

function myEmail_() {
  return (NOTIFY_EMAIL || Session.getEffectiveUser().getEmail()).trim();
}

function scriptTz_() {
  return Session.getScriptTimeZone();
}

// "15-30 min" -> 30, "30-45 min" -> 45
function minutes_(duration) {
  const nums = String(duration).match(/\d+/g);
  return nums ? Number(nums[nums.length - 1]) : 30;
}

function sessionTypeFrom_(text) {
  return SESSION_TYPES.find((t) => String(text).toLowerCase().indexOf(t.toLowerCase()) !== -1) || "";
}

// Finds a Requests row by booking ID, event ID or email. Returns
// { row, values } or null.
function findRequest_(by, value) {
  if (!value) return null;
  const sheet = requestsSheet_();
  const last = sheet.getLastRow();
  if (last < 2) return null;
  const rows = sheet.getRange(2, 1, last - 1, REQUESTS_HEADERS.length).getValues();
  const col = { id: R.ID, event: R.EVENT, email: R.EMAIL }[by] - 1;
  const want = String(value).trim().toLowerCase();
  // Newest first, so a repeat visitor matches their latest booking.
  for (let i = rows.length - 1; i >= 0; i--) {
    if (String(rows[i][col]).trim().toLowerCase() === want) {
      return { row: i + 2, values: rows[i] };
    }
  }
  return null;
}

function formatWhen_(date, tz) {
  return Utilities.formatDate(date, tz, "EEEE d MMMM yyyy, h:mm a") + " (" + tz + ")";
}

function page_(title, bodyHtml) {
  return HtmlService.createHtmlOutput(
    '<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:520px;margin:40px auto;padding:0 20px;color:#1f2937;line-height:1.5">' +
      bodyHtml + "</div>"
  ).setTitle(title);
}

// ---------------------------------------------------------------- web app

// The website posts here. kind=booking saves a call request; anything else
// is feedback.
function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    return json_(p.kind === "booking" ? saveBooking_(p) : saveFeedback_(p));
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

// Without parameters: the approved reviews, for the website. Open the /exec
// URL in a browser to check the setup: it should show {"reviews":[...]}.
// With action=...: the pages behind the links in your booking emails.
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action) {
    try {
      return bookingAction_(p);
    } catch (err) {
      console.error(err);
      return page_("Something went wrong", "<h2>Something went wrong</h2><p>" + esc_(err.message || err) + "</p>");
    }
  }
  try {
    return json_({ reviews: approvedReviews_() });
  } catch (err) {
    return json_({ reviews: [], error: String(err && err.message ? err.message : err) });
  }
}

// ---------------------------------------------------------------- feedback

// Saves a new feedback submission. New rows start unapproved.
function saveFeedback_(p) {
  const rating = Math.max(1, Math.min(5, parseInt(p.rating, 10) || 0));
  const booking = findRequest_("id", clean_(p.booking, 40));
  withLock_(() => {
    const sheet = getSheet_();
    const row = nextEmptyRow_(sheet);
    sheet.getRange(row, 1, 1, FEEDBACK_HEADERS.length).setValues([[
      new Date(),
      clean_(p.name, 100),
      clean_(p.role, 150),
      rating,
      clean_(p.message, 2000),
      clean_(p.sessionType, 50),
      false,
      booking ? booking.values[R.EMAIL - 1] : "",
      booking ? booking.values[R.ID - 1] : "",
    ]]);
    sheet.getRange(row, 7).insertCheckboxes();
  });
  return { ok: true };
}

// Only the approved reviews, newest first. Emails are never sent to the site.
function approvedReviews_() {
  const rows = getSheet_().getDataRange().getValues().slice(1);
  return rows
    .filter((r) => r[6] === true && String(r[4]).trim() !== "")
    .reverse()
    .map((r) => ({
      name: String(r[1]),
      role: String(r[2]),
      rating: Number(r[3]) || 5,
      message: String(r[4]),
      sessionType: String(r[5]),
    }));
}

// ---------------------------------------------------------------- bookings

function saveBooking_(p) {
  const name = clean_(p.name, 100);
  const email = clean_(p.email, 200);
  const date = clean_(p.date, 10);
  const time = clean_(p.time, 5);
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("Please give your name and a valid email.");
  if (!clean_(p.role, 150)) throw new Error("Please tell me your role.");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) throw new Error("Please pick a date and time.");

  const tz = clean_(p.tz, 60) || scriptTz_();
  const id = newId_();
  const token = Utilities.getUuid();
  const values = [
    new Date(), id, name, email, clean_(p.role, 150), clean_(p.sessionType, 50), date, time, tz,
    clean_(p.duration, 20) || "15-30 min", clean_(p.message, 2000), "Pending", "", "", "",
  ];
  withLock_(() => {
    const sheet = requestsSheet_();
    const row = nextEmptyRow_(sheet);
    // Date and time are stored as plain text so Sheets doesn't reformat them.
    sheet.getRange(row, R.DATE, 1, 2).setNumberFormat("@");
    sheet.getRange(row, 1, 1, values.length).setValues([values]);
  });
  PropertiesService.getScriptProperties().setProperty("tok_" + id, token);

  const requested = Utilities.parseDate(date + " " + time, tz, "yyyy-MM-dd HH:mm");
  const reviewLink = ScriptApp.getService().getUrl() + "?action=review&id=" + id + "&t=" + token;
  const type = values[R.TYPE - 1];
  MailApp.sendEmail({
    to: myEmail_(),
    replyTo: email,
    subject: "New " + (type || "call") + " request from " + name,
    htmlBody:
      "<p><b>" + esc_(name) + "</b> (" + esc_(email) + ") would like a " + esc_(values[R.DURATION - 1]) + " " +
      esc_(type || "call") + ".</p>" +
      "<p><b>Role:</b> " + esc_(values[R.ROLE - 1] || "-") + "<br><b>Preferred time:</b> " +
      esc_(formatWhen_(requested, scriptTz_())) + "<br><b>Message:</b> " + esc_(values[R.MESSAGE - 1] || "-") + "</p>" +
      '<p><a href="' + reviewLink + '" style="display:inline-block;background:#7c3aed;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none">Review and approve</a></p>' +
      '<p style="color:#666;font-size:13px">You can change the time before approving. Reply to this email to write to ' + esc_(name) + " directly.</p>",
    name: YOUR_NAME + " (website)",
  });
  MailApp.sendEmail({
    to: email,
    subject: "I got your request",
    htmlBody:
      "<p>Hi " + esc_(name.split(" ")[0]) + ",</p>" +
      "<p>Thanks for reaching out! I've received your request for " + esc_(formatWhen_(requested, tz)) +
      ". I'll confirm by email, and you'll get a calendar invite with the meeting link.</p>" +
      "<p>Thanks,<br>" + esc_(YOUR_NAME) + "</p>",
    name: YOUR_NAME,
  });
  return { ok: true };
}

// The pages behind the "Review and approve" link.
function bookingAction_(p) {
  const id = clean_(p.id, 40);
  const token = PropertiesService.getScriptProperties().getProperty("tok_" + id);
  if (!token || token !== p.t) {
    return page_("Link not valid", "<h2>This link isn't valid</h2><p>It may be old or incomplete. Open the latest email instead.</p>");
  }
  const found = findRequest_("id", id);
  if (!found) return page_("Not found", "<h2>Request not found</h2><p>It may have been deleted from the Requests tab.</p>");
  const v = found.values;
  const status = String(v[R.STATUS - 1]);

  if (p.action === "approve" && status === "Pending") return approve_(found, p);
  if (p.action === "decline" && status === "Pending") return decline_(found, p);
  if (status !== "Pending") {
    return page_("Already " + status.toLowerCase(), "<h2>Already " + esc_(status.toLowerCase()) + "</h2><p>" + esc_(v[R.NAME - 1]) +
      "'s request was already handled. See the Requests tab for details.</p>");
  }

  // Review page: details, an editable time, and Approve / Decline buttons.
  const tz = scriptTz_();
  const requested = Utilities.parseDate(String(v[R.DATE - 1]) + " " + String(v[R.TIME - 1]), String(v[R.TZ - 1]) || tz, "yyyy-MM-dd HH:mm");
  const url = ScriptApp.getService().getUrl();
  const hidden = '<input type="hidden" name="id" value="' + esc_(id) + '"><input type="hidden" name="t" value="' + esc_(p.t) + '">';
  const field = "display:block;width:100%;box-sizing:border-box;padding:8px;margin:4px 0 12px;border:1px solid #d1d5db;border-radius:6px;font:inherit";
  return page_("Review request",
    "<h2>" + esc_(v[R.NAME - 1]) + " wants a " + esc_(v[R.TYPE - 1] || "call") + "</h2>" +
    "<p><b>Email:</b> " + esc_(v[R.EMAIL - 1]) + "<br><b>Role:</b> " + esc_(v[R.ROLE - 1] || "-") +
    "<br><b>Length:</b> " + esc_(v[R.DURATION - 1]) + "<br><b>Message:</b> " + esc_(v[R.MESSAGE - 1] || "-") + "</p>" +
    '<form method="get" action="' + url + '" target="_top" style="margin-top:24px">' + hidden +
    '<input type="hidden" name="action" value="approve">' +
    "<label>Date<input type=\"date\" name=\"date\" value=\"" + Utilities.formatDate(requested, tz, "yyyy-MM-dd") + '" style="' + field + '" required></label>' +
    "<label>Time (" + esc_(tz) + ")<input type=\"time\" name=\"time\" value=\"" + Utilities.formatDate(requested, tz, "HH:mm") + '" style="' + field + '" required></label>' +
    "<label>Length (minutes)<input type=\"number\" name=\"minutes\" min=\"15\" max=\"180\" step=\"5\" value=\"" + minutes_(v[R.DURATION - 1]) + '" style="' + field + '" required></label>' +
    '<button style="background:#7c3aed;color:#fff;border:0;padding:12px 20px;border-radius:8px;font:inherit;cursor:pointer">Approve and send invite</button></form>' +
    '<form method="get" action="' + url + '" target="_top" style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb">' + hidden +
    '<input type="hidden" name="action" value="decline">' +
    '<label>Can\'t do it? Optional note to ' + esc_(String(v[R.NAME - 1]).split(" ")[0]) +
    '<textarea name="note" rows="3" style="' + field + '"></textarea></label>' +
    '<button style="background:#fff;color:#b91c1c;border:1px solid #fca5a5;padding:10px 18px;border-radius:8px;font:inherit;cursor:pointer">Decline</button></form>'
  );
}

function approve_(found, p) {
  const v = found.values;
  const tz = scriptTz_();
  const start = Utilities.parseDate(clean_(p.date, 10) + " " + clean_(p.time, 5), tz, "yyyy-MM-dd HH:mm");
  const mins = Math.max(15, Math.min(180, parseInt(p.minutes, 10) || minutes_(v[R.DURATION - 1])));
  const end = new Date(start.getTime() + mins * 60000);
  const name = String(v[R.NAME - 1]);
  const email = String(v[R.EMAIL - 1]);
  const type = String(v[R.TYPE - 1]) || "Consultation";
  const title = SESSION_TAG + " " + type + " with " + name;
  const description = "Booked through your website.\n\nRole: " + (v[R.ROLE - 1] || "-") + "\nMessage: " + (v[R.MESSAGE - 1] || "-");

  const meeting = createEvent_(title, description, start, end, name, email, String(v[R.ID - 1]));
  const sheet = requestsSheet_();
  sheet.getRange(found.row, R.STATUS).setValue("Approved");
  sheet.getRange(found.row, R.MEETING).setValue(start);
  sheet.getRange(found.row, R.EVENT).setValue(meeting.eventId);

  const theirTz = String(v[R.TZ - 1]) || tz;
  MailApp.sendEmail({
    to: email,
    subject: "Confirmed: " + type + " on " + Utilities.formatDate(start, theirTz, "EEE d MMM, h:mm a"),
    htmlBody:
      "<p>Hi " + esc_(name.split(" ")[0]) + ",</p>" +
      "<p>Your " + esc_(type.toLowerCase()) + " session is confirmed for <b>" + esc_(formatWhen_(start, theirTz)) + "</b>, for " + mins + " minutes.</p>" +
      (meeting.link
        ? '<p><a href="' + meeting.link + '" style="display:inline-block;background:#7c3aed;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none">Join the meeting</a><br><span style="color:#666;font-size:13px">' + meeting.link + "</span></p>"
        : "<p>I'll share the meeting link before we start.</p>") +
      "<p>You'll also get a calendar invite. Looking forward to it!</p>" +
      "<p>Thanks,<br>" + esc_(YOUR_NAME) + "</p>",
    name: YOUR_NAME,
  });
  return page_("Approved", "<h2>Approved</h2><p>" + esc_(name) + " has been sent the invite for " + esc_(formatWhen_(start, tz)) + "." +
    (meeting.link ? '</p><p>Meet link: <a href="' + meeting.link + '" target="_top">' + meeting.link + "</a>" : "") +
    "</p><p>After the meeting they'll get the feedback email automatically.</p>");
}

// Creates the calendar event and invites the guest. Uses the Google Calendar
// API service (for a Google Meet link) when it's added, else your MEET_LINK.
function createEvent_(title, description, start, end, name, email, id) {
  if (typeof Calendar !== "undefined") {
    const ev = Calendar.Events.insert({
      summary: title,
      description: description,
      start: { dateTime: start.toISOString() },
      end: { dateTime: end.toISOString() },
      attendees: [{ email: email, displayName: name }],
      conferenceData: { createRequest: { requestId: id + "-" + start.getTime(), conferenceSolutionKey: { type: "hangoutsMeet" } } },
    }, "primary", { conferenceDataVersion: 1, sendUpdates: "all" });
    return { eventId: ev.iCalUID, link: ev.hangoutLink || MEET_LINK };
  }
  const ev = CalendarApp.getDefaultCalendar().createEvent(title, start, end, {
    description: description + (MEET_LINK ? "\n\nJoin: " + MEET_LINK : ""),
    location: MEET_LINK,
    guests: email,
    sendInvites: true,
  });
  return { eventId: ev.getId(), link: MEET_LINK };
}

function decline_(found, p) {
  const v = found.values;
  const name = String(v[R.NAME - 1]);
  const note = clean_(p.note, 1000);
  requestsSheet_().getRange(found.row, R.STATUS).setValue("Declined");
  MailApp.sendEmail({
    to: String(v[R.EMAIL - 1]),
    subject: "About your session request",
    htmlBody:
      "<p>Hi " + esc_(name.split(" ")[0]) + ",</p>" +
      "<p>Thank you for reaching out. Unfortunately I can't take this session at the requested time.</p>" +
      (note ? "<p>" + esc_(note).replace(/\n/g, "<br>") + "</p>" : "<p>Feel free to reply to this email to suggest another time.</p>") +
      "<p>Thanks,<br>" + esc_(YOUR_NAME) + "</p>",
    name: YOUR_NAME,
  });
  return page_("Declined", "<h2>Declined</h2><p>" + esc_(name) + " has been told by email.</p>");
}

// ---------------------------------------------------------------- feedback emails

// Runs every 15 minutes (after you run setupTrigger once). Finds tagged
// meetings that ended in the last 24 hours and emails each guest the
// feedback link once. If the guest is in the Requests tab (booked through the
// site or typed in by you), the form opens with their name, role and session
// type filled in.
function sendFeedbackEmails() {
  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const props = PropertiesService.getScriptProperties();
  const me = Session.getEffectiveUser().getEmail().toLowerCase();
  const events = CalendarApp.getDefaultCalendar().getEvents(since, now);

  events.forEach((event) => {
    const title = event.getTitle();
    if (title.indexOf(SESSION_TAG) === -1) return;
    if (event.getEndTime() > now) return; // not finished yet
    const key = "sent_" + event.getId() + "_" + event.getEndTime().getTime();
    if (props.getProperty(key)) return; // already emailed

    event.getGuestList().forEach((guest) => {
      const email = guest.getEmail();
      if (!email || email.toLowerCase() === me) return;
      const booking = findRequest_("event", event.getId()) || findRequest_("email", email);
      const b = booking ? booking.values : null;
      const guestName = guest.getName() && guest.getName() !== email ? guest.getName() : "";
      const name = (b && String(b[R.NAME - 1])) || guestName;
      const role = b ? String(b[R.ROLE - 1]) : "";
      const type = sessionTypeFrom_(title) || (b ? String(b[R.TYPE - 1]) : "");
      let id = b ? String(b[R.ID - 1]) : "";
      if (booking && !id) {
        // A row you typed in by hand: give it an ID so feedback links back to it.
        id = newId_();
        requestsSheet_().getRange(booking.row, R.ID).setValue(id);
      }

      const q = [];
      if (name) q.push("name=" + encodeURIComponent(name));
      if (role) q.push("role=" + encodeURIComponent(role));
      if (type) q.push("type=" + encodeURIComponent(type));
      if (id) q.push("b=" + encodeURIComponent(id));
      const link = FEEDBACK_URL + (q.length ? "?" + q.join("&") : "");
      const greeting = name ? "Hi " + esc_(name.split(" ")[0]) + "," : "Hi,";
      MailApp.sendEmail({
        to: email,
        subject: "Thanks for the session! Could you share quick feedback?",
        htmlBody:
          "<p>" + greeting + "</p>" +
          "<p>Thank you for your time today. How would you rate the session? Tap a star:</p>" +
          starsHtml_(link) +
          '<p style="color:#666;font-size:13px">Or <a href="' + link + '">open the feedback form</a> on my website.</p>' +
          "<p>Thanks,<br>" + esc_(YOUR_NAME) + "</p>",
        name: YOUR_NAME,
      });
      if (booking) requestsSheet_().getRange(booking.row, R.FEEDBACK).setValue(new Date());
    });
    props.setProperty(key, String(now.getTime()));
  });
}

// Five clickable stars; each opens the website form with that rating chosen.
function starsHtml_(link) {
  let html = '<p style="font-size:0">';
  for (let n = 1; n <= 5; n++) {
    html +=
      '<a href="' + link + (link.indexOf("?") === -1 ? "?" : "&") + "rating=" + n +
      '" style="text-decoration:none;font-size:34px;color:#8486ff;padding:0 4px" title="' +
      n + " star" + (n > 1 ? "s" : "") + '">&#9733;</a>';
  }
  return html + "</p>";
}

// Run this once from the Apps Script editor to start the automatic emails.
// It also creates the Requests tab so you can see its columns.
function setupTrigger() {
  requestsSheet_();
  getSheet_();
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === "sendFeedbackEmails")
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("sendFeedbackEmails").timeBased().everyMinutes(15).create();
}
