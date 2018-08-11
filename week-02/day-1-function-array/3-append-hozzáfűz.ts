'use strict'
export{}

let typo1: string= `Chinchill`;
function appendAFunc1 (alm: string) {
    let add: string= "a";                   // plusz VÁLTÓZÓ hozzáadásával
    return alm.concat(add);                 // CONCAT-tel végzi el a műveletet
}
console.log (appendAFunc1(typo1));

//  -----------------------------------------

let typo2: string= `Chinchill`;
function appendAFunc2 (alm: string) {
    return alm + "a";                       // RETURN-ben végzi el a műveletet
}
console.log (appendAFunc2(typo2));

//  -----------------------------------------

// ??????????   typeban a push number, nem string? typescriptben lehet-e pusholni stringbe?
let typo3: string = 'Chinchill';
console.log (typo3.push('a'));



// -  Create a string variable named `typo` and assign the value
//`Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`