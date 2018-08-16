'use srtict'
export{}
// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdd(n: number): void {
  
  if (n >= 1) {

    numberAdd(n - 1);
    console.log(n)

  }

}
numberAdd(10);