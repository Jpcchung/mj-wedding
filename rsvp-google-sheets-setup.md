# RSVP to Google Sheets: Setup (about 5 minutes)

Your website form is ready. It just needs a Google Sheet to send responses to. Follow these steps once, and every RSVP will appear as a new row automatically.

## 1. Create the spreadsheet

1. Go to sheets.google.com and create a new blank spreadsheet.
2. Name it something like "MJ Wedding RSVPs."
3. You don't need to add headers; the script creates them on the first RSVP.

## 2. Add the script

1. In the spreadsheet, click **Extensions → Apps Script**.
2. Delete any code in the editor.
3. Open the file `rsvp-apps-script.gs` (in this folder), copy everything, and paste it in.
4. Click the save icon (or Ctrl/Cmd + S).

## 3. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** RSVP (anything is fine)
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Google will ask you to authorize. Click through: choose your account, click "Advanced," then "Go to (project name)," then "Allow." This is normal for your own script.
6. Copy the **Web app URL**. It looks like:
   `https://script.google.com/macros/s/AKfy..../exec`

## 4. Connect it to the website

1. Open `index.html` in a text editor.
2. Find this line (near the bottom, in the script section):
   ```
   var RSVP_ENDPOINT = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";
   ```
3. Replace the placeholder with your Web app URL, keeping the quotes:
   ```
   var RSVP_ENDPOINT = "https://script.google.com/macros/s/AKfy..../exec";
   ```
4. Save the file.

## 5. Test it

1. Open the website, scroll to RSVP, fill it in, and submit.
2. You should see "Thank you! Your RSVP is in."
3. Check your spreadsheet: a new row should appear with the answers.

## Good to know

- **Until you paste the URL,** the form safely falls back to opening an email to jonathan@getluckyvr.com, so no RSVP is ever lost.
- **The site must be hosted online** (Netlify, Cloudflare Pages, etc.) for guests to submit. Opening the HTML file directly from your computer works for your own testing too.
- **Columns collected:** timestamp, name, email, attending, party size, meal, dietary, hotel, song. To add or remove a field, update both the form in `index.html` and the `FIELDS` list at the top of the script.
- **If you change the script later,** you must redeploy: Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy. The URL stays the same.
- **See responses live** right in the Google Sheet, or turn on email notifications via Tools → Notification settings.
