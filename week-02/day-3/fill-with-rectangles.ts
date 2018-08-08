'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

let colors: string[] = ["red", "green", "yellow", "blue"];

let rndNum: number = getRandomIntInclusive(0, 3);
colors[rndNum]




let a: number = 200;
let x: number = (canvas.width / 2) - (a / 2);
let y: number = (canvas.height / 2) - (a / 2);


ctx.fillStyle = ();
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + a, y);
ctx.lineTo(x + a, y + a);
ctx.lineTo(x, y + a);
ctx.fill();