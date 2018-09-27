'use strict';

const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  array.forEach(elem => {
    output.push(callback(elem))
  })

  // The mapWith() should return with the output array.
  return output;
}

// ---------------------------------------------------------

// Exercise 1:

const addOne = (number) => {
  return number + 1;
}

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// ---------------------------------------------------------

// Exercise 2:

// Create a callback function which removes every second character from a string

const removeSecondLetter = () => {
  // words.forEach(elem => {
  //   for (let i = 0; i < elem.length; i++) {
  //     if (i % 2 != 0) {
  //       elem.replace(elem[i], '');
  //     }
  //   }
  // })
  return ;
}

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
