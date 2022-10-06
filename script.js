



// display current day at the top of the calendar
 var currentDay = moment();
 $("#currentDay").text(currentDay.format("dddd, MMM Do"));

// colorcode time blocks based on past/present/future
// format timeblock hours

var timeblock = $('.timeblock').text;
var presentHour = moment().format("h");
var eventblock = $('.event');

if (timeblock < presentHour) {
    eventblock.css({'background-color': 'yellow'});
}


