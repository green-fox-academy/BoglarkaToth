'use srtict'
export{}

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique1(listOfNumbers1: Array<number>): number[] {
  let uniqueList1 = listOfNumbers1.filter(onlyUnique1);
   return uniqueList1;
}
function onlyUnique1(value, index, self) { 
   return self.indexOf(value) === index;
}
console.log(unique1([1, 11, 34, 11, 52, 61, 1, 34]))

// ------------------------------------------------------------------------

function unique2(array) {
  let newArray: number[] = [];
  array.forEach(function (arrayElem) {
      if
      (!newArray.some(function (newArrayElem) {
          return arrayElem == newArrayElem;
      }))
          {
          newArray.push(arrayElem);
          }
  })
  return newArray;
}
console.log(unique2([1, 11, 34, 11, 52, 61, 1, 34]));

// ------------------------------------------------------------------------

let myArray3: number [] = [1, 11, 34, 11, 52, 61, 1, 34];
function onlyUnique3(value, index, arr){
    return arr.indexOf(value) === index;
}
let uniqueList3 = myArray3.filter(onlyUnique3);
console.log(uniqueList3.sort());
