'use strict'
export { }


// Write a program that prints the numbers from 1 to 100.

for (let n1: number = 1; n1 <= 100; n1++) {   
    if (n1 % 3 == 0 && n1 % 5 == 0) {
        console.log("FizzBuzz");            // ami 3al ÉS 5tel osztható, ahelyett “FizzBuzz”
    } else if (n1 % 5 == 0) {
        console.log("Buzz");                // ami 5el osztható, ehelyett "Buzz"
    } else if (n1 % 3 == 0) {
        console.log("Fizz");                // ami 3al osztható, ahelyett "Fizz"
    } else {
        console.log(n1);
    }
}




// a számok mellé írja a fizzt buzzt .... HOGYAN tehetem a consolt kívülre???
// NEM LEHET -- minden IFen belül kell a consol. nem lehet egy kívül..
// ÍGY NEM JÓ:
/*
for (let n1: number = 1; n1 <= 100; n1++) {   
    let print: string = '';
    if (n1 % 3 == 0 && n1 % 5 == 0) {
        print = "FizzBuzz";            // ami 3al ÉS 5tel osztható, ahelyett “FizzBuzz”
    } else if (n1 % 5 == 0) {
        print = "Buzz";                // ami 5el osztható, ehelyett "Buzz"
    } else if (n1 % 3 == 0) {
        print = "Fizz";                // ami 3al osztható, ahelyett "Fizz"
    } else {
    }
    console.log(n1 + print);
}
*/


// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five “FizzBuzz” print .