# Challenge 5 - Work Day Scheduler

## Purpose

The purpose of this project was to create an application for a client that an employee can use to generate a password that meets criteria the employee has selected. 

## Built With

![js percentage](https://img.shields.io/badge/java-58.8%25-green)
![css percentage](https://img.shields.io/badge/css-26.5%25-ff69b4)
![html percentage](https://img.shields.io/badge/html-14.7%25-9cf)

## Table of Contents

- [User Story](#challenge---user-story)
- [Acceptance Criteria](#challenge---acceptance-criteria)
- [Application Website Link](#application-website-link)
- [JavaScript Code](#javascript-code)
- [Credits](#credits)


## Challenge - User Story

This a description of the requirements for the application requested by the client:

- AS AN employee with a busy schedule I WANT to add important events to a daily planner SO THAT I can manage my time effectively

AS A user never knowing what I want to eat I WANT to be able to input certain criteria (cuisines I don't want, distances I don't want to pass) SO THAT the app can randomly select a restaurant based off that criteria

## Challenge - Acceptance Criteria

The following criteria for the application had to be met:

GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner <br />
  THEN the current day is displayed at the top of the calendar
- WHEN I scroll down <br />
  THEN I am presented with time blocks for standard business hours
- WHEN I view the time blocks for that day <br />
  THEN each time block is color-coded to indicate whether it is in the past, present, or future
- WHEN I click into a time block <br />
  THEN I can enter an event
- WHEN I click the save button for that time block <br />
  THEN the text for that event is saved in local storage
- WHEN I refresh the page <br />
  THEN the saved events persist

## Application Website Link

[peque](https://jessoliva.github.io/pinky-cal/)

## JavaScript Code

To build this application, I wrote code that overall does the following:
- The initial screen displays the current time and day above the schedule, and the schedule is empty
    - The event container for the current hour will be white
    - The event container for past hours will be a dark, deep green
    - The event container for future hours will be a light, pastel green

<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/1empty.png" alt="start screen" width="75%" align="top"> 
</p>

- The user can input events into the schedule per half hour timeblocks. When the user clicks on a half hour textarea, that textarea will go into focus so the user can input text.
    - When the user clicks on the checkmark button, that specific event for that specific timeblock will be saved onto local storage. This is to prevent the event from being removed when the page is refreshed.
 

<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/2start day.png" alt="question screen with wrong answer" width="75%" align="top"> 
</p>

<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/3adding tasks.png" alt="question screen" width="75%" align="top"> 
</p>
<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/3adding tasks2.png" alt="enter score screen" width="75%" align="top"> 
</p>

- When the user clicks the x button, the textarea field for that specific timeblock will be cleared and the saved event for that timeblock will be removed from local storage.

<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/4delete tasks.png" alt="lose screen" width="75%" align="top"> 
</p>
<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/4deletetasks2.png" alt="enter score screen" width="75%" align="top"> 
</p>
<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/5end result.png" alt="enter score screen" width="75%" align="top"> 
</p>

## Credits
- [Stack Overflow: CSS Transition](https://stackoverflow.com/questions/27903965/can-i-apply-a-css-transition-on-hover-out-only)
- Badges - [Shields.io](https://shields.io/)