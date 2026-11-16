# Feedback form setup

The site has a feedback page at `/feedback` and a "What People Say" section on
the homepage. Answers are saved to a Google Sheet you own. Only rows you tick as
**Approved** appear on the website.

## 1. Create the sheet (5 minutes)

1. Go to sheets.google.com and create a blank sheet named **Portfolio feedback**.
2. In that sheet, open **Extensions > Apps Script**.
   (If Google says "unable to open the file", you're signed into several
   Google accounts. Open the sheet in an incognito window signed into one
   account and try again.)
3. Delete what's in the editor and paste the contents of
   `docs/feedback-apps-script.gs`. Click **Save**.
4. Click **Deploy > New deployment**. Click the gear icon and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy** and allow the permissions Google asks for (choose your
   account, then "Advanced" > "Go to project" if Google shows a warning; it's
   your own script).
6. Copy the **Web app URL** (it ends in `/exec`).

## 2. Connect the website (Vercel)

1. In Vercel, open the **nebula-web-profile** project > **Settings > Environment Variables**.
2. Add `VITE_FEEDBACK_ENDPOINT` with the `/exec` URL you copied, for all environments.
3. Go to **Deployments**, open the latest one and click **Redeploy**.

## 3. Use it

- After a session, send the person: `https://jaweria-batool.vercel.app/feedback`
- You can pre-fill details in the link:
  `https://jaweria-batool.vercel.app/feedback?name=Ali%20Khan&type=Mentoring`
- New answers appear in the **Feedback** tab of the sheet with the
  **Approved** box unticked. Tick it to show that review on the homepage.
  Untick it to hide it again. Changes show up on the next page load.

## 4. Automatic email after each meeting (optional)

The same script can email guests the feedback link when a meeting ends.

1. In the Apps Script editor, check `FEEDBACK_URL` and `YOUR_NAME` at the top.
   Click **Save**.
2. In the function dropdown at the top, choose **setupTrigger** and click **Run**.
   Allow the Calendar and Gmail permissions Google asks for.
3. From now on, put **[Session]** in the title of any meeting that should get a
   feedback email, and add the person as a guest. For example:
   `[Session] Mentoring with Ali`
   If the title contains Mentoring, Collaboration or Consultation, the form
   opens with that session type already chosen.

The script checks every 15 minutes, so the email arrives up to 15 minutes after
the meeting's scheduled end time. Each guest is emailed once per meeting.
Meetings without the tag are ignored. The email has five clickable stars that
open the form with that rating already chosen.

## 5. Booking requests from the website

The "Schedule Call" form now saves requests to the same sheet and emails you.

**One-time setup** (in the Apps Script editor, after pasting the latest script):

1. On the left, click **Services** (the + next to it), choose **Google Calendar API**,
   and click **Add**. This lets the script add a Google Meet link to each meeting.
   (Without it, set `MEET_LINK` at the top of the script to your own reusable Meet link.)
2. Choose **setupTrigger** in the function dropdown and click **Run**. Allow the
   permissions. This creates the **Requests** tab.
3. **Deploy > Manage deployments >** pencil icon **> Version: New version > Deploy**.

**How it works:**

1. Someone sends a request. It appears in the **Requests** tab as *Pending*, they get a
   "got your request" email, and you get an email with a **Review and approve** button.
2. On the review page you can change the date, time and length, then click
   **Approve and send invite**. A Google Calendar event with a Meet link is created, and
   they get a confirmation email plus the calendar invite. Or click **Decline**, with an
   optional note.
3. About 15 minutes after the meeting ends, they get the feedback email. The form opens
   with their name, role and session type filled in, and their answer is saved with their
   email and booking ID.

**A booking that didn't come through the website:** type a row into the Requests tab
with at least Name, Email, Role and Session type, and put **[Session]** in the calendar
event's title with them as a guest. The feedback email will use those details.

## Changing things

- Session types: `SESSION_TYPES` in `src/lib/feedback.ts`.
- If you edit the Apps Script later, use **Deploy > Manage deployments > Edit >
  New version** so the same URL keeps working.

## If answers don't reach the sheet

1. Open your `/exec` URL in a browser. It should show `{"reviews":[]}`.
   - If it shows a Google sign-in page or "access denied", edit the deployment
     and set **Who has access** to **Anyone**.
   - If it shows an error about the script not being linked to a sheet, the
     script was created at script.google.com instead of from the sheet. Paste
     the sheet's ID (the long code in its address between `/d/` and `/edit`)
     into `SHEET_ID` at the top of the script, then deploy a new version.
2. Look in the **Feedback** tab of the sheet, not **Sheet1**. If the tab looks
   empty, click cell A1 and press Ctrl+Down (Cmd+Down on a Mac) to jump to the
   last answer. Earlier versions of the script saved answers below row 1000;
   delete the empty rows above them to bring them to the top.
3. In the Apps Script editor, open **Executions** to see any `doPost` errors.
4. If the website says the form "isn't connected yet", `VITE_FEEDBACK_ENDPOINT`
   is missing in Vercel or the site wasn't redeployed after adding it.
