'use strict';
export{}

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
// The output should be: "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(list: number[]) {
  if ( list.indexOf(7) === -1 ) {         // mi a -1 ??
    console.log('Noooo');
  } else {
    console.log('Hoorray');
  }
}
containsSeven(numbers);


// Do this again with a different solution using different list functions!

// ???????????????

//with the 'every' function
function includingSeven (eachElement){
  return eachElement !== 7;
}
console.log(numbers.every(includingSeven));


//with the 'some' function
let answer = function(element){
  return element == 7;
}
console.log(numbers.some(answer));


// console.log(containsSeven(numbers));   eredeti feladatban benne volt. melyik method kell ehhez??