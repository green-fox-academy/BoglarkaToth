'use strict';
export{}

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverseS(reve: string): string {
    let splitString: string[] = reve.split('');
    let reversedArray: string[] = splitString.reverse();
    let joinStringArray: string = reversedArray.join('');
    return joinStringArray;
}
console.log(reverseS(reversed));
export = reverseS;


function reversedString (str: string) {
    let reversed = str.split('');
    reversed.reverse();
    str = reversed.join('');
    return str;
}
console.log(reversedString(reversed));

/*
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse (newLn: string) {
    return newLn.split("").reverse().join("");   
}

console.log(reverse(reversed));
export = reverse;
*/