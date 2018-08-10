'use strict';
export { }

/*
let sign: string = "%";
let space: string = " ";
let lineCount: number = 4;

for (let i: number = 0 ; i < lineCount ; i++ ) {
    console.log( sign + space + sign + space + sign + space + sign);
    console.log( space + sign + space + sign + space + sign + space + sign);
}
*/

let lineCount: number = 8;

// ha kevesebb %-et akarok, a string szorzásnál a linecountot ki kell cserélnek egy számmal
// STRING SZORZÁSA:
let empty: string = "";
for ( let i: number = 0 ; i < lineCount ; i++ ) {
    empty += "% ";
}
console.log( empty );    // for ciklus utosó sorát írja ki  (ha belül van, akkot az összes sort kiírja)

for (let i: number = 0 ; i < lineCount / 2 ; i++ ) {
    console.log(empty);
    console.log(" " + empty);
}




/*
 // MÉ' NEM??? 
let lineCount: number = 4;
let line: any = "% ";
let fullLine: any = line * 4;
let space: string = " ";

for (let i: number = 0 ; i < lineCount ; i++ ) {
    console.log( fullLine);
    console.log( space + fullLine );
}
*/



// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//