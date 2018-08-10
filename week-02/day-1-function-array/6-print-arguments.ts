'use strict'
export{}



function printParams (...param: number[]) {

    console.log (param);
  
}

printParams(1, 4, 6);





let num = [7, 8, 9];
num.forEach(function (value: number) {
  console.log(value);
});




// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)