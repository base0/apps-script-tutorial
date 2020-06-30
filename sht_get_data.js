function myFunction() {
  let data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  for (let i = 0; i < data.length; i++) {
    let row = data[i];
    Logger.log(row[0]+row[1]);
  }
}
