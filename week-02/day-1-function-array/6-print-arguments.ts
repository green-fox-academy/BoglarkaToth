'use strict'
export{}

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams (...param: numbe []) {
    console.log (param);
}
printParams(1, 4, 6);


// forEach : a változóban megadott paraméterek mindegyikén külön-külön végrehajtja az utána írt műveletet
// bármi lehet  ?? for is ?
let num = [7, 8, 9];
num.forEach(function (value: number) {
  console.log(value);
});



