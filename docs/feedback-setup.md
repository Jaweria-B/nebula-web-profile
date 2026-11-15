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

1. In Vercel, open the **jaweria-batool** project > **Settings > Environment Variables**.
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

## Changing things

- Session types: `SESSION_TYPES` in `src/lib/feedback.ts`.
- If you edit the Apps Script later, use **Deploy > Manage deployments > Edit >
  New version** so the same URL keeps working.
