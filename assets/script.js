// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// 1. Render time blocks
//     ○ Can either hard code it in HTML using rows and cols w bootstrap
//     ○ Loop over and render the table rows and cols in javascript

// 2. Color Code time block for past, present, and future
//     ○ Need some javascript, css
//     ○ If then statements that relate to the date and apply certain css properties given that
//     ○ (select html elements in javascript and add css to it)
//         § Add attribute
//         § .style
        
// 3. Allow user to type in event in timeblock 
//     ○ Will need some input fields, with text saved in local storage
//     ○ Attribute that indicates time-block on input fields
//     ○ Local storage saves data in JSON string
//     ○ On SAVE: Store the date/time as the key and the event as the value
//         § Create and event listener for the save button that puts this key value pair into local storage

// 1. When I refresh the page, the property persists
// On refresh, grab the data from local storage and display it in the appropriate time block