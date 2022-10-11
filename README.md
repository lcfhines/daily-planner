# daily-planner
Creating a simple hourly calendar application that represents the current day.

## Description
This is a simple calendar application that allows a user to save events for each hour of the work day (9am - 5pm) on the date that the user opens the app. The app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. 

Each hour time block is color-coded to indicate whether it is in the past, future, or present. The application uses Moment.js to work with date and time.

The user can enter an event by clicking into a time block. By clicking the save button, the text is saved in local storage and will persist when the page is refreshed.

### User Story
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### Screenshot
![Screen Shot 2022-10-11 at 8 40 26 AM](https://user-images.githubusercontent.com/113798073/195093165-88f188f8-f600-421e-a89c-4f499bdab55a.png)


### Link
https://lcfhines.github.io/daily-planner/

### Author
Laura Fitzgerald  
October 2022
