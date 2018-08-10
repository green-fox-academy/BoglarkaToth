'use strict'
export{}


let factorialNum: number= 5;


function factorio(inputFactorial: number) {
    let result: number= 1;

    for (let i: number= inputFactorial ; i > 0; i-- ) {
        result = result * i;
        
    }
    return result;
}

console.log(factorio(factorialNum));


// -  Create a function called `factorio`
//    that returns it's input's factorial






