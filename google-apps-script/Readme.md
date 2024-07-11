# Google Apps Script for Archaeological Sites Map

This directory contains the Google Apps Script code for exporting data from a Google Sheet as JSON.

## Files

- `Code.js`: The main script file.
- `appsscript.json`: The project configuration file.

## Deployment Instructions

1. **Open Google Sheets:**
   - Open the Google Sheets document containing the archaeological sites data.

2. **Access Google Apps Script Editor:**
   - Click on `Extensions` > `Apps Script`.

3. **Import the Script Files:**
   - Delete any existing code in the editor.
   - Copy the contents of `Code.js` into the script editor.
   - Click on `File` > `Project properties` > `Script ID` to note the script ID.

4. **Set Up the Script:**
   - Replace `YOUR_SHEET_ID` in the script with the actual ID of your Google Sheet.
   - Save the script.

5. **Deploy as Web App:**
   - Click on `Deploy` > `New deployment`.
   - Select `Web app`.
   - Configure the deployment settings:
     - **Description:** Provide a description.
     - **Execute as:** Select `Me`.
     - **Who has access:** Select `Anyone`.
   - Click `Deploy`.

6. **Get the Web App URL:**
   - Copy the `Web app URL` provided after deployment.

7. **Set Up Automatic Updates:**
   - Click on the clock icon (Triggers) in the script editor.
   - Add a trigger to run the `doGet` function periodically (e.g., once a day).

8. **Use the Web App URL:**
   - Use the Web App URL in your `index.html` file to fetch data for the map.

