'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.
//should be green, otherwise it should be red.



/*
  1.    
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(600, 400);
        ctx.lineTo(0, 0);
        ctx.stroke();

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0, 400);
        ctx.lineTo(600, 0);
        ctx.stroke();
*/


     
        function drawLine(lineColor: string, x: number, y: number, z: number){
            ctx.strokeStyle = lineColor;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(z, 0);
            ctx.stroke();
        }
        drawLine("green", canvas.width, canvas.height, 0);
        drawLine("red", 0, canvas.height, canvas.width);

// <canvas width="600" height="400" class="main-canvas"></canvas>

