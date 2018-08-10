'use strict';
export { }


let lineCount: number= 7


let a: string = ' ';
let b: string = '*';
let c: string = '*';
let d: string = '  ';

for (let i: number = 0; i < lineCount/2; i++) {
    for (let j: number = i; j < ((lineCount/2) -1); j++) {
        a += ' ';
    }
    console.log( a + b );
   
    if (i == lineCount/2 - 1 && lineCount % 2 == 0) {
        console.log(a + b);
    }
    b += '**';
    a = ' ';
}

for (let k: number = lineCount/2 + 2; k < lineCount + 1; k++) {
    for (let l: number = k ; l < lineCount; l++) {
        c += '**';
    }
    console.log( d + c );
    d += ' ';
    c = '*';
}

/*
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

*/

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