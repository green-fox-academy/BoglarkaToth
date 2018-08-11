'use srtict'
export{}

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

// ??? miért kell a map ???

let numList: numbe [] = [1, 2, 3, 8, 5, 6];

let changeFour = numList.map(elem => {
  numList.splice(3, 1, 4)               // 3. helyről töröl 1 elemet és a 4et rakja a helyére
})
console.log(numList);
console.log(numList[3]);                // 3. elemet írja



let numList2: number [] = [1, 2, 3, 8, 5, 6];

numList2.splice(3, 1, 4)               // 3. helyről töröl 1 elemet és a 4et rakja a helyére

console.log(numList2);
console.log(numList2[3]);                // 3. elemet írja