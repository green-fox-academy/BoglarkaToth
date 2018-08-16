'use srtict'
export{}

// Write a recursive function that takes one parameter: n and counts down from n.

/*
function elso(n: number): void {
    for (let i: number = n ; i >= 0 ; i-- ) {
    console.log(i);
  }
}
elso(10);
*/

// ------------------------------------------------------------

function elsoR(n: number): void { // void - nem írja a feladat, h térjek vissza....
    // console.log(n); // 10- -1 >>> 1)c.l.on belüli 10; 2)10>=0? Y->10-1=9 ->kilép-kiír 3) 9>=0? Y ->9-1=8->kilép-kiír
                      // ..) 0>=0? Y->0-1=-1 ->kilép-kiír; ..) -1>=0? N -> VÉGE
    if (n >= 0) {
    console.log(n);
    elsoR(n - 1); // -1nél ha a rec után írom a cl.ot, akkor növekszik - ha elé, akkor csökken
    // console.log(n); // 0-10 >>> ???
  }
  // console.log(n); // -1-10 >>> ??? 
}
elsoR(10);
// console.log(elsoR(10)); _ nincs return, nem tudom kívüldől kiírni



// ------------------------------------------------------------
/*
function counter(n: number) {
  if (n == 0) {
    console.log(n);
  } else {
    console.log(n);
    counter(n - 1);
    }
 }
 counter(10);

// ------------------------------------------------------------
 
 
 function counter(n: number) {
  console.log(n);
  if (n > 0) {
    counter (n - 1);
  } else if (n < 0) {
    throw new Error('minusz szam nem adja');
  }
 }
 counter(10);
 */