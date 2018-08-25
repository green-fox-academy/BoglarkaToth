'use strict'
export{}
/** 
 * Create and test a function called `getTrickyAvg` that takes a number array as parameter
 * and returns the average of the smallest odd and largest even.
 *  - use only basic control flow statements, like 'for', 'if', etc.
 *  - do not use built-in methods like 'filter', 'forEach', 'map', etc.
 *  - write test for 2 different scenarios (test file: tricky-average.spec.ts)
 * 
 * Example cases:
 *   [1, 2, 3] -> should return 1.5
 *   [3, 4, 5, 6] -> should return 4.5
 *   [5, 2, 8, -1] -> should return 3.5
 */

 let allTheNumbers: number[] = [];
 
 function getTrickyAvg (allTheNumbers: number[]): number {
  let minOddNumber: number = allTheNumbers[0];
  let maxEvenNumber: number = allTheNumbers[0];

  for(let i: number = 0 ; i < allTheNumbers.length ; i++) {
    if ( allTheNumbers[i] % 2 !== 0 && allTheNumbers[i] < minOddNumber) {
      minOddNumber = allTheNumbers[i];
    }

    if ( allTheNumbers[i] % 2 == 0 && allTheNumbers[i] > maxEvenNumber) {
      maxEvenNumber = allTheNumbers[i];
    }
  }

  return (minOddNumber+maxEvenNumber)/2;
}

console.log(getTrickyAvg([3, -1, 5, 8, 6]));



//   

/*

  let maxNumber: number = trickyNumbers[0];
  for(let i = 0 ; i < trickyNumbers.length ; i++) {       // console.log(i);   ok. végigmegy..
    if ( trickyNumbers[i] < maxNumber) {
      maxNumber = trickyNumbers[i]
    }
    return maxNumber;
  }
*/


/********************************
 * Do not modify the code below *
 ********************************/
export default getTrickyAvg;