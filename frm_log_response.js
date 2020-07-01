// ref : https://developers.google.com/apps-script/guides/triggers/events#form-submit_1
function myFunction(e) {
  let itemResponses = e.response.getItemResponses();
  for (let j = 0; j < itemResponses.length; j++) {
    let response = itemResponses[j];
    Logger.log('Response to the question "%s" was "%s"',
        response.getItem().getTitle(),
        response.getResponse());
  
  }
}
