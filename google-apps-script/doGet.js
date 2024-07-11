function doGet() {
  var sheet = SpreadsheetApp.openById("1vITdPWnyOhVdkfrgjFX8VgjFudX-G3GjobduwY6sdms").getSheetByName("archaeological_sites");
  var data = sheet.getDataRange().getValues();
  var json = [];
  for (var i = 1; i < data.length; i++) {
    json.push({
      "sitename": data[i][0],
      "latitude": data[i][2],
      "longitude": data[i][1],
      "type": data[i][3]
    });
  }
  return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);
}
