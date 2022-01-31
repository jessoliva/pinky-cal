# Challenge 5 - Quiz

## Purpose

The purpose of this project was to create an application for a client that an employee can use to generate a password that meets criteria the employee has selected. 

## Built With

![js percentage](https://img.shields.io/badge/javascript-59.8%-green)
![css percentage](https://img.shields.io/badge/css-22.6%25-ff69b4)
![html percentage](https://img.shields.io/badge/html-17.6%25-9cf)

## Table of Contents

- [User Story](#challenge---user-story)
- [Acceptance Criteria](#challenge---acceptance-criteria)
- [Application Website Link](#application-website-link)
- [JavaScript Code](#javascript-code)
- [Credits](#credits)


## Challenge - User Story

This a description of the requirements for the application requested by the client:

- AS AN employee with a busy schedule I WANT to add important events to a daily planner SO THAT I can manage my time effectively

## Challenge - Acceptance Criteria

The following criteria for the application had to be met:

GIVEN I need a new, secure password
- WHEN I click the start button <br />
  THEN a timer starts and I am presented with a question
- WHEN I answer a question <br />
  THEN I am presented with another question
- WHEN I answer a question incorrectly <br />
  THEN time is subtracted from the clock
- WHEN all questions are answered or the timer reaches 0 <br />
  THEN the game is over
- WHEN the game is over <br />
  THEN I can save my initials and score

## Application Website Link

[peque](https://jessoliva.github.io/pinky-cal/)

## JavaScript Code

To build this application, I wrote code that overall does the following:
- The start screen displays, explaining the quiz and parameters

<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/1start.jpeg" alt="start screen" width="75%" align="top"> 
</p>

- When the user clicks the start button, the first question displays
    - The top right of the screen displays a timer with a countdown starting at 150 seconds

<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/2ques.jpeg" alt="question screen with wrong answer" width="75%" align="top"> 
</p>

- When the user answers the question correctly, the next question displays

- When the user answers the question incorrectly, 10 seconds are deducted from the timer. The user is alerted of the 10sec deduction. Then the next question is displayed

<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/3ques.jpeg" alt="question screen" width="75%" align="top"> 
</p>

- When the user finishes answering all of the questions, the timer stops and end quiz screen displays. The end screen shows the users score, which is based on the time left on the timer and asks the user to input a name to save the score. When the user clicks submit, or presses enter when they're still in the input field, their score is saved.

<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/4score.jpeg" alt="enter score screen" width="75%" align="top"> 
</p>

- If the time runs out, the user loses and the lose screen is displayed. The user is provided with two options: 
    - If they click the "Do you want to play again?" button, the quiz restarts.
    - If they click the "Home Screen" button, they are taken to the start screen.

<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/5lose.jpeg" alt="lose screen" width="75%" align="top"> 
</p>

- The left top link "View High Scores" takes you to another page where high scores are displayed. The high scores are displayed in descending order. The user is presented with two options:
    - If they click the "Go Back" button, they are taken to the start screen.
    - If they click the "Clear High Scores" button, the high scores are cleared.
<p align="left" width="100%">
&emsp;&emsp;&emsp;<img src="assets/images/6scores.jpeg" alt="enter score screen" width="75%" align="top"> 
</p>

## Credits
- Web Dev Simplified - [Build A Quiz App With Javascript](https://www.youtube.com/watch?v=riDzcEQbX6k)
- [Stack Overflow: CSS Transition](https://stackoverflow.com/questions/27903965/can-i-apply-a-css-transition-on-hover-out-only)
- Badges - [Shields.io](https://shields.io/)