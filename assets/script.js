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



function currDate() {
    // set current day to current day
    let currentDay = $('#currentDay');
    currentDay.text(moment().format('dddd, MMMM Do YYYY'));

    setInterval (function() {
        // set current day to current day
        let currentTime = $('#currentTime');
        currentTime.text(moment().format('h:mm:ss A'));

    }, 1000);
}
currDate();

// reference the container element
const containerEl = $('.container');

// set time for timeblocks
let time00 = ['700 AM', '800 AM', '900 AM', '1000 AM', '1100 AM', '1200 PM', '100 PM', '200 PM', '300 PM', '400 PM', '500 PM'];
let timeHR = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
let time30 = ['730 AM', '830 AM', '930 AM', '1030 AM', '1130 AM', '1230 PM', '130 PM', '230 PM', '330 PM', '430 PM', '530 PM'];

// dynamically create the timeblocks
function createBlocks() {

    for(i = 0; i < 11; i++) {
        // create the row div element
        const rowEl = $('<div>').addClass('row d-flex justify-content-center');

        // create hour element
        const hourEl = $('<div>').addClass('hour col-15 p-0 d-flex flex-column');
        // create 00 time element
        let time1El = $('<div>').addClass('htop h-50 text-right').text(time00[i]);
        // create 30 time element
        let time2El = $('<div>').addClass('hbot h-50 text-right').text(time30[i]);
        // append time1 and time2 to hour
        hourEl.append(time1El, time2El);

        // create description element
        const desEl = $('<div>').attr('id',timeHR[i]).addClass('description col-8 p-0 d-flex flex-column');
        // create 00 des element
        let des1El = $('<textarea>').addClass('dtop h-50 ' + 'block' + timeHR[i]);
        // create 30 des element
        let des2El = $('<textarea>').addClass('dbot h-50 ' + 'block' + timeHR[i]);
        // append des1 and des2 to description
        desEl.append(des1El, des2El)

        // create button element
        // have to use specific sequence of quotes for saveEvents arguments 
        const btnEl = $('<button>').addClass('saveBtn col-1 btn').attr('onclick', "saveEvents(event, '" + time00[i] + "')"); 
        // create span element
        const spanEl = $('<span>').addClass('oi oi-task');
        // append span to button
        btnEl.append(spanEl);

        // append hour, description, and button to row
        rowEl.append(hourEl, desEl, btnEl);

        // append row to container
        containerEl.append(rowEl);
    }
};
createBlocks();

// compare current time to block time to change description div color
function compareTime() {
    // get current HR in 24hr format
    let currHR = moment().format('HH');
    // console.log(currHR);
    let currTime = parseInt(currHR);

    // reference text area
    const textArea = $('.description');
    // remove previous past, present, future classes
    $(textArea).removeClass('.past .present .future')

    // compare 00 hour to current time
    for (i = 0; i < 11; i++) {

        // get each hr value from timeHR array
        let blockTime = timeHR[i];

        // reference textarea element by id
        let textAreaEl = $('#' + blockTime);
        
        // if blockTime is less than currTime --> add past class
        if (blockTime < currTime) {

            // get textarea for htop and hbot and add past class
            textAreaEl.addClass('past');
        }
        // if blockTime is greater than currTime --> add future class
        else if (blockTime > currTime) {

            // get textarea for htop and hbot and add future class
            textAreaEl.addClass('future');
        }
        // else leave as is
        else {}
    }
};
compareTime();

// array to hold events for timeblock
let eventsArr = [];

function saveEvents(event, timeBlock) {

    // get main parent div 
    const mainParent = $(event.target).parent();
    const textAreaParent = mainParent.children('.description');
    const textAreas = textAreaParent.children('textarea');

    for (i = 0; i < 2; i++) {
        // get value for each textarea
        let eventTexts = textAreas[i].value;

        // if textareas are empty
        if (eventTexts !== '') {
            // push texts into empty events array
            eventsArr.push(eventTexts);
        }
    }

    if (eventsArr.length !== 0) {
        // save event texts to local storage with key being specific timeblock time
        localStorage.setItem(timeBlock, JSON.stringify(eventsArr));
    }

    // button out of focus
    event.target.blur();
}

function loadEvents() {


}

