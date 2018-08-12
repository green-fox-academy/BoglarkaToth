'use srtict'
export{}

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

??

let numList: number[] = [3, 4, 5, 6, 7];







// -----------------------------

let numList2: number[] = [3, 4, 5, 6, 7];
let newList2: number[] = numList2.reverse();
console.log(newList2);

// -----------------------------

let numList3: number[] = [3, 4, 5, 6, 7];
console.log(numList3.reverse());

// -----------------------------

let numList4 = new Array(3, 4, 5, 6, 7);
numList4.reverse();
console.log(numList4);