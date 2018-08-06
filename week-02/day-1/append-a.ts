'use strict'


let typo1: string= `Chinchill`;

function appendAFunc1 (alm: string) {
    let add: string= "a";
    return alm.concat(add);
}

console.log (appendAFunc1(typo1));


//  ---------------



let typo2: string= `Chinchill`;

function appendAFunc2 (alm: string) {
    return alm + "a";
}

console.log (appendAFunc2(typo2));



// -  Create a string variable named `typo` and assign the value
//`Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`