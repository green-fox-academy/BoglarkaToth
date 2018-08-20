'use srtict'
export{}

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost(legjobbaoldalabbi)digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).


function sumNum(n: number): number {
  
  if (n < 10) {
   return n;  // utolsó kör
  } else {    
    return n % 10 + sumNum(Math.floor(n / 10))
  } 
}

console.log(sumNum(12345));