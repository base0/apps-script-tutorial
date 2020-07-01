function myFunction(e) {
  let itemResponses = e.response.getItemResponses();
  let r = itemResponses.map(x => x.getResponse());
  CalendarApp.getDefaultCalendar().createAllDayEvent(r[0], new Date(r[1]));
}

function t() {
  FormApp.getActiveForm();
}
