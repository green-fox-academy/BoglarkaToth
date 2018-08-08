'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

/*
    1.
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.lineTo(300, 0);
        ctx.stroke();


        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.lineTo(0, 200);
        ctx.stroke();
*/


function drawLine(lineColor: string, x: number, y: number){
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(x, y);
    ctx.stroke();
}
drawLine("green", 0, 200);
drawLine("red", 300, 0);


// DO NOT TOUCH THE CODE ABOVE THIS LINE