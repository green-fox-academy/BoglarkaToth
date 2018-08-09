'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

    function drawLine(x: number, y: number){
        for (let i = 0 ; i < 3 ; i++) {
            ctx.beginPath();
            ctx.moveTo( x , y );
            ctx.lineTo( canvas.width / 2 , canvas.height / 2 );
            x += 100;
            //y += 100;
            ctx.stroke();
        }
    }
    drawLine( 200 , 50 );
                    



/*
   
        ctx.beginPath();
        ctx.moveTo( canvas.width / 2 , canvas.height / 2 );
        ctx.lineTo( 0 , 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo( canvas.width / 2 , canvas.height / 2 );
        ctx.lineTo( canvas.width / 2 , canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo( canvas.width / 2 , canvas.height / 2 );
        ctx.lineTo( canvas.width , 0 );
        ctx.stroke();
*/

//<canvas width="600" height="400" class="main-canvas"></canvas>