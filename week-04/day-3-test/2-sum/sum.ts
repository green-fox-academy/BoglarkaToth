'use strict'

/*
Create a sum method in your class which has a list of integers as parameter
It should return the sum of the elements in the list
*/

export class SumOfNumbers {
  private listOfNumbers: number[];

  constructor(listOfNumbers: number[]) {
    this.listOfNumbers = listOfNumbers;
  }

  sum(): number {
    let containOfNumbers: number = 0;
    for (let i = 0; i < this.listOfNumbers.length; i++) {
      containOfNumbers += this.listOfNumbers[i];
    }
    return containOfNumbers;
  }
}

// let testItem: SumOfNumbers = new SumOfNumbers([3, 5, 88]);

// console.log(sumAllOfNumbers.sum());
// console.log(testItem.sum());

