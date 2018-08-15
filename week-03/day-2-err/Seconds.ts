'use strict';
export{}

// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result


let listN: number[] = [23, 1, 13, 42, 6];
let listNn: number[] = [4, 77, 53, 2, 76, 95, 4, 2, 7];


function listA(inputList: number []): number [] {
  let newList: number [] = [];

  for (let i: number = 1 ; i < inputList.length ; i += 2 ) {
   newList.push(inputList[i])
  }
 
  return newList;
}

console.log(listA(listNn));