'use strict';
export{};

 
export function getTrickyAvg ( allTheNumbers: number[] ): number {
  let minOddNumber: number = allTheNumbers[0];
  // nem kell inicializálni (= allTheNumbers[0]), mert nem biztos, h van benne bármi?
  let maxEvenNumber: number = allTheNumbers[0];

  for( let i: number = 0 ; i < allTheNumbers.length ; i++ ) {
    if ( allTheNumbers[i] % 2 !== 0 && allTheNumbers[i] < minOddNumber ) {
      minOddNumber = allTheNumbers[i];
    }
    if ( allTheNumbers[i] % 2 === 0 && allTheNumbers[i] > maxEvenNumber ) {
      maxEvenNumber = allTheNumbers[i];
    }
  }

  return ( minOddNumber + maxEvenNumber ) / 2;
}

/********************************
 * Do not modify the code below *
 ********************************/
export default getTrickyAvg;