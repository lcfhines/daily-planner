

// display current day at the top of the calendar
 var currentDay = moment();
 $("#currentDay").text(currentDay.format("dddd, MMM Do"));