
var saveButton = $('.saveBtn');


$(document).ready(function() {
// display current day at the top of the calendar
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMM Do"));
    
    // assign save button click listener for user's input
    saveButton.on("click", function() {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
        console.log(block9);
    })

// get the data stored to local storage for each block, load into corresponding block
$("#block9 .description").val(localStorage.getItem("block9"));
$("#block10 .description").val(localStorage.getItem("block10"));
$("#block11 .description").val(localStorage.getItem("block11"));
$("#block12 .description").val(localStorage.getItem("block12"));
$("#block13 .description").val(localStorage.getItem("block13"));
$("#block14 .description").val(localStorage.getItem("block14"));
$("#block15 .description").val(localStorage.getItem("block15"));
$("#block16 .description").val(localStorage.getItem("block16"));
$("#block17 .description").val(localStorage.getItem("block17"));

function colorCode() {
    var presentHour = moment().hour();
    console.log(presentHour);
    $(".time-block").each(function() {
        var hourBlock = parseInt($(this).attr("id").split("block")[1]);

        // use past present and future classes to indicate where the timeblock stands based on the current time

        if (hourBlock < presentHour){
           $(this).addClass("past");
           $(this).removeClass("present");
           $(this).removeClass("future");
            } else if (hourBlock === presentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
            } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }

    })
}

colorCode();

})