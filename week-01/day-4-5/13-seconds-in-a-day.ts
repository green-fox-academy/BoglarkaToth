'use strict';
export {}

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
// INTEGER  ??

let daySeconds: number = 24 * 60 * 60;
let result: number= daySeconds - ((currentHours * currentMinutes * currentSeconds) + (currentMinutes * currentMinutes) + currentSeconds);

console.log(result);

// -----------------------------------------------------

let secDay: number= 86400;
let secToday: number= (currentHours *60 *60) + (currentMinutes *60 ) + currentSeconds;

console.log(secDay-secToday);

// -----------------------------------------------------

let secondsADay: number = (60 * 60 * 24);
let secondsSpent: number = ((14 * 60 * 60) + (34 * 60) + 42);

console.log(secondsADay - secondsSpent);