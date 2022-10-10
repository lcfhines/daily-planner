
var saveButton = $('.saveBtn');
var inputEl = $('.eventInput');

// display current day at the top of the calendar
 var currentDay = moment();
 $("#currentDay").text(currentDay.format("dddd, MMM Do"));

// colorcode time blocks based on past/present/future
// format timeblock hours

// var timeblock = $('.timeblock').text;
// var presentHour = moment().format("h");
// var eventblock = $('.event');

// if (timeblock < presentHour) {
//     eventblock.css({'background-color': 'yellow'});
// }




// submitting form

function handleFormSubmit(event) {
    event.preventDefault();

    var eventItem = $('input[name="eventInput"]').val();
    if (!eventItem) {
        console.log('No event entered');
        return;
    }
    // need to tell it where to put text
        storedEvent.textContent = eventItem;
    // storedEvent.append(eventItem)
    // store to local value
    localStorage.setItem("stored event", eventItem);
    $('input[name="eventInput"]').val('');
}

saveButton.on('click', handleFormSubmit);