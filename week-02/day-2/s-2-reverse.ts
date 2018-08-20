'use strict';
export{}

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';


function reverse1(newLn1: string): string {
    let splitString: string[] = newLn1.split('');
    let reversedArray: string[] = splitString.reverse();
    let joinStringArray: string = reversedArray.join('');
    return joinStringArray;
}
console.log(reverse1(reversed));

// ---------------------------------------------------------------------------------------

function reverse2 (newLn2: string): string {
    return newLn2.split("").reverse().join("");   
}
console.log(reverse2(reversed));