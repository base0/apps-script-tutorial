function myFunction() {
  let data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  MailApp.sendEmail('w@gmail.com', 'from Google Sheet', data[0][1]);
}


