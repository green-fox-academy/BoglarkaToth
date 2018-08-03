'use strict';


let linesCount: number = 4;
let space: string= ' ';
let star: string= '*';

for ( let p: number= 0 ; p < linesCount ; p++ ) {
    linesCount = linesCount ;
    console.log ();

    for (let o: number= 0 ; o < (linesCount-1); o-- ) {
    space = ;
    console.log ( space );
    }

    for ( ; ; ) {
        star ;
        console.log ( space );
        }
}





let lineNr: number = 4;

for (let a: number = 1; a <= lineNr; a++) {
 let row: string = ' ';
 
    for (let jee: number = 1; jee <= (lineNr - a); jee++) {
    row += ' ';
    }

    for (let i: number = 1; i <= a; i++) {
    row += '**';
    }

 console.log(row)
}




// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is