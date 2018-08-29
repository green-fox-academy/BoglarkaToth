'use strict';
export{}

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
// The output should be: "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
// --------------------------------------------------------------------------

function containsSeven1(number: number[]): string {
  let returnString: string = '';
  for (let element = 0; element < number.length; element++) {
      if (numbers[element] === 7) {
          returnString = 'Hoorray';
      }
      else if (numbers[element] !== 7) {
          returnString = 'Noooooo';
      }
  }
  return returnString;
}
console.log(containsSeven1(numbers));

// --------------------------------------------------------------------------

function containingSeven2 (input: any []) {
  if (input.indexOf(7) === -1){
      console.log('Noooooo');
  } else {
      console.log('Hooorray');
  }
}
containingSeven2(numbers);
