'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const centerX: number = canvas.width / 2;
const centerY: number = canvas.height / 2;


//non recursive solution, with fixed distance
// 600px szeles negyzet, kovi negyzet 100px-re van
// 500px szeles negyzet, kovi negyzet 100px-re van
// 400px szeles negyzet, kovi negyzet 100px-re van
function generateSquares(n: number, startSize: number) {
    let size: number = startSize;
    for (let i = 0; i < n; i++) {
        let x: number = centerX - size / 2;
        let y: number = centerY - size / 2;
        ctx.strokeRect(x, y, size, size);
        
        size = size - 100;
    }
}

//recursive solution, with changing distance between the squares
// 600px szeles negyzet, kovi negyzet 100px-re van
// 500px szeles negyzet, kovi negyzet 75pxre
// 425px szeles negyzet, kovi negyzet 50p
function recursiveSquares(size: number, distance: number) {
    if (size > 0) {
        let x: number = centerX - size / 2;
        let y: number = centerY - size / 2;
        ctx.strokeRect(x, y, size, size);

        let newSize: number = size - distance;
        let newDistance: number = distance + 5;
        recursiveSquares(newSize, newDistance);
    }
}

recursiveSquares(canvas.width, 10);