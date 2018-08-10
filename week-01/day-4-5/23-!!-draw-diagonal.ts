'use strict';
export { }

let lineCount: number = 10;

for ( let x: number= 0; x < lineCount; x++ ) {
     
    if ( x == 0 || x == lineCount - 1 ) {
           // -1 mert az x változó, sosem lesz egyenlő a lineCounttal,
           // ezért az ifbe sose menne bele az utolsó esetben,
           // amikor az utolsó sort akarjuk kiírni 

        let point: string= "";
        for ( let y: number= 0 ; y < lineCount ; y++ ) {
            point += "%";
        }
        console.log (point);
       
    } else {
        let point2: string= "";
        for ( let z: number= 0 ; z < lineCount ; z++ ) {
            point2 += "%";
            
            if ( z == 0 || z == lineCount -1 ) {
                console.log(" ");
            } else {

            }
        }
    }
}








// let lineDiagonalCount: number = 24;

// let patternOne: string = ' ';
// let patternTwo: string = 'o';
// let linepattern: string = '';

// for (let i = 0; i < lineDiagonalCount; i++) {
//     for (let j = 0; j < lineDiagonalCount; j++) {
//         if (j == i || j==0 || j==lineDiagonalCount-1 || i==0 || i==lineDiagonalCount-1) {
//             linepattern += patternTwo
//         }
//         else 
//         {
//             linepattern += patternOne
//         }                
//     }
//     console.log(linepattern);
//     linepattern= '';
// }



// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is