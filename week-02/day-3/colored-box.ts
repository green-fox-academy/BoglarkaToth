'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// draw a box that has different colored lines on each edge.



     
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(300, 10);
        ctx.lineTo(10, 10);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(10, 300);
        ctx.lineTo(10, 10);
        ctx.stroke();

        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.moveTo(300, 300);
        ctx.lineTo(300, 10);
        ctx.stroke();

        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(300, 300);
        ctx.lineTo(10, 300);
        ctx.stroke();


/*
     2.
        function drawLine1(lineColor: string, x: number, y: number){
            ctx.strokeStyle = lineColor;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(10, 10);
            ctx.stroke();
        }
        drawLine1("red", 300, 10);
        drawLine1("green", 10, 300);

        function drawLine2(lineColor: string, x: number, y: number){
            ctx.strokeStyle = lineColor;
            ctx.beginPath();
            ctx.moveTo(300, 300);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        drawLine2("yellow", 300, 10);
        drawLine2("blue", 10, 300);
*/

/*
function drawLine(lineColor: string, x: number, y: number, z: number){
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(z, z);
    ctx.stroke();
}
drawLine("red", 300, 10, 10);
drawLine("green", 10, 300, 10);
drawLine("yellow", 300, 10, 300);
drawLine("blue", 10, 300, 300);
*/

// DO NOT TOUCH THE CODE ABOVE THIS LINE