'use strict';
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let stars: number= -1;

for ( let spaces: number= 3; spaces >= 0; spaces--) {
    stars += 2;
    let row: string="";

    for ( let j: number= 0; j < spaces; j++ ) {
        row += " ";
    }
    for ( let k: number= 0; k <  stars; k++ ) {
        row += "*";
    } 
    console.log(row);
}


let lineNr: number = 4;

for (let a: number = 1; a <= lineNr; a++) {
 let row: string = ' ';
 
    for (let jee: number = 1; jee <= (lineNr - a); jee++) {
    row += ' ';
    }

    for (let i: number = 1; i <= a; i++) {
    row += '*';
    }

 console.log(row)
}