'use strict';


let linesCount: number= 7
let stars: number= -1;

for ( let spaces: number= linesCount; spaces >= 0; spaces--) {
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



for ( let spaces2: number= 0; spaces2 < linesCount; spaces2++ ) {
    stars -= 2;
    let row: string=" ";

    for ( let m: number= spaces2; m > 0; m--) {
        row += " ";
    }
    for ( let n: number= stars; n > 0; n--) {
        row += "*";
    }   
    console.log(row);
}



    // Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is