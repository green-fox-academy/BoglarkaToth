'use srict'

let lineCount: number = 10;

let line: string = ''; 
for (let c = 0; c < lineCount; c++) {
   line += '*';
   console.log(line);
   }

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is