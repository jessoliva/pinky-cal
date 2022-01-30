// get current date and time
function currDate() {
    // get current day
    let currentDay = $('#currentDay');
    // set format for current day
    currentDay.text(moment().format('dddd, MMMM Do YYYY'));

    // as each second passes, show it dynamically
    setInterval (function() {
        // get current time
        let currentTime = $('#currentTime');
        // set format for current time
        currentTime.text(moment().format('h:mm:ss A'));

    }, 1000);
}
currDate();

// reference the container element
const containerEl = $('.container');
//
// set time for timeblocks
let time00 = ['700 AM', '800 AM', '900 AM', '1000 AM', '1100 AM', '1200 PM', '100 PM', '200 PM', '300 PM', '400 PM', '500 PM'];
let timeHR = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let time30 = ['730 AM', '830 AM', '930 AM', '1030 AM', '1130 AM', '1230 PM', '130 PM', '230 PM', '330 PM', '430 PM', '530 PM'];
let id = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
//
// dynamically create the timeblocks
function createBlocks() {

    // load saved events
    let savedEvents = loadEvents();

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
        let des1El = $('<textarea>').addClass('dtop h-50');
        // create 30 des element
        let des2El = $('<textarea>').addClass('dbot h-50');

        // if a timeblock key in savedEvents exists, then set its values to the correct textarea
        if (savedEvents[time00[i]]) {
            // set text for time 00:00
            des1El.text(savedEvents[time00[i]][0]);
            // set text for time 00:30
            des2El.text(savedEvents[time00[i]][1]);
        }
        // append des1 and des2 to description
        desEl.append(des1El, des2El)

        // create button element
        // have to use specific sequence of quotes for saveEvents arguments @ attr
        const btnEl = $('<button>').addClass('saveBtn col-1 btn').attr('onclick', "saveEvents(event, '" + time00[i] + "')").attr('onkeypress', 'return enterKeyPressed(event)'); 
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

// save the events onto local storage
function saveEvents(event, eventTime) {
    // array to hold events for timeblock
    // save within function to ONLY save information of button clicked 
    let eventsArr = [];
    // if this is saved outside of the function, when ANY saved button is clicked
    // the text values will be pushed into that array, so mixing up the timeblocks

    // get main parent div 
    const mainParent = $(event.target).parent();
    // get description div
    const textAreaParent = mainParent.children('.description');
    // get textareas 
    const textAreas = textAreaParent.children('textarea');

    // get values for each textarea
    const textTop = textAreas[0].value;
    const textBot = textAreas[1].value;

    // if textTop is an empty value AND textBot is a non-empty value, then push both 
    if (!textTop && textBot) {
        eventsArr.push(textTop, textBot);
        console.log(eventsArr);
    }
    // if textTop is a non-empty value AND textBot is an empty value, then push both 
    if (textTop && !textBot) {
        eventsArr.push(textTop, textBot);
    }
    // if both textTop and textBot are filled, then push both
    if (textTop && textBot) {
        eventsArr.push(textTop, textBot);
    }

    // if the length of the array is not 0, then save it to local storage
    if (eventsArr.length !== 0) {
        // save event texts to local storage with key being specific timeblock time
        localStorage.setItem(eventTime, JSON.stringify(eventsArr));
    }

    // button out of focus
    event.target.blur();
}

// if enter key is pressed when focus is on button, then run saveEvents
function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       saveScore();
       return true;
    }
};

// load the events for each timeblock from local storage
function loadEvents() {
    // set object to be empty
    let loadedEvents = {};

    // loop through each timeblock and get the values from local storage
    for (i = 0; i < 11; i++) {
        // load saved events and turn into array
        let savedEvents = JSON.parse(localStorage.getItem(time00[i]));

        // if savedEvents is not null (meaning there are actual values in local storage), then save it to the empty array
        if (savedEvents !== null) {
            // get each time 00:00
            let timeBlock = time00[i];
            
            // each timeblock 00:00 acts as an index && has a value of the array savedEvents, index=0 is top textarea and index=1 is bot textarea
            loadedEvents[timeBlock] = savedEvents;
        }
    }
    // return the array with the saved events from local storage to use in createBlocks() to set them to the appropriate timeblocks
    return loadedEvents; 
}
loadEvents();

