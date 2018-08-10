'use strict';
export { }

let lineCount: number = 6;

for ( let x: number= 0; x < lineCount; x++ ) {
    if ( x == 0 || x == lineCount - 1 ) {
        console.log ("%%%%%%");
    } else {
        console.log ("%    %")
    }
}

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is