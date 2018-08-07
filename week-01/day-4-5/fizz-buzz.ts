'use strict'

for (let n1: number = 1; n1 <= 100; n1++) {
    
    if (n1 % 3 == 0 && n1 % 5 == 0) {
        console.log("FizzBuzz");
    } else if (n1 % 5 == 0) {
        console.log("Buzz");
    } else if (n1 % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(n1);
    }
}

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five
//print “FizzBuzz”.