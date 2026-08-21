/**
 * MJ Wedding  ->  Google Sheets
 * Handles three forms that post to the same web app:
 *   - RSVPs           (default)          -> "RSVPs" tab
 *   - Room bookings   (form = "booking") -> "Room Bookings" tab
 *   - Site visits     (form = "visit")   -> "Visits" tab
 * Paste this into the Apps Script editor attached to your spreadsheet.
 * See rsvp-google-sheets-setup.md for setup. If you already deployed an
 * earlier version, replace the code and redeploy a NEW VERSION (see the guide).
 */

var SCRIPT_VERSION = 'v4-rsvp-fields';

var RSVP_SHEET = 'RSVPs';
var RSVP_FIELDS = ['timestamp', 'name', 'email', 'attending', 'welcome_party', 'party_size', 'group_trip', 'group_activities', 'notes'];

var BOOKING_SHEET = 'Room Bookings';
var BOOKING_FIELDS = ['timestamp', 'booking_name', 'email', 'phone', 'checkin', 'checkout', 'rooms', 'bed', 'adults', 'children', 'guest_names', 'requests'];

var VISIT_SHEET = 'Visits';
var VISIT_FIELDS = ['timestamp', 'name'];

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);

    var p = (e && e.parameter) ? e.parameter : {};
    var sheetName = RSVP_SHEET, fields = RSVP_FIELDS;
    if (p.form === 'booking') { sheetName = BOOKING_SHEET; fields = BOOKING_FIELDS; }
    else if (p.form === 'visit') { sheetName = VISIT_SHEET; fields = VISIT_FIELDS; }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(fields.map(function (f) { return f.toUpperCase(); }));
    }

    var row = fields.map(function (f) {
      if (f === 'timestamp') return new Date();
      return p[f] || '';
    });
    sheet.appendRow(row);

    lock.releaseLock();
    return json({ result: 'success' });
  } catch (err) {
    return json({ result: 'error', message: String(err) });
  }
}

function doGet() {
  return json({ result: 'ok', version: SCRIPT_VERSION, message: 'Endpoint is live.' });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
