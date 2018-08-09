'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let a: number= 200;
let x: number= (canvas.width / 2) - (a / 2);
let y: number= (canvas.height / 2) - (a / 2);


    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + a, y);
    ctx.lineTo(x + a, y + a);
    ctx.lineTo(x, y + a);
    ctx.fill();
    

    // <canvas width="600" height="400" class="main-canvas"></canvas>