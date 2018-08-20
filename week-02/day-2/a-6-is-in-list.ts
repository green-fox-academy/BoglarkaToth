'use strict';
export{}

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 10, 12, 14, 16];

function checkNums(listOfNumbers: number[]): boolean {
  let numberList: boolean = undefined;
  numberList = listOfNumbers.some(function(elements): boolean {
    if ( elements === 4 && 8 && 12 && 16 ) {
      return true;
    }
  })
  return false;
}
console.log(checkNums(listOfNumbers));  // ezt kérte a feladat

// ----------------------------------------------------------------------------------

function elementFinder(input: number []){
    if (input.indexOf(4) !== -1 && input.indexOf(8) !== -1 && input.indexOf(12) !== -1 && input.indexOf(16) !== -1) {
        console.log('TRUE');
    } else {
        console.log('FALSE')
    }
}
elementFinder(listOfNumbers);
