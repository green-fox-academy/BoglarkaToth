'use srtict'
export{}

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console


let ai1: number[] = [3, 4, 5, 6, 7];

console.log(ai1[0] + ai1[1] + ai1[2] + ai1[3] + ai1[4]);

// -----------------------------------------

let ai2: number[] = [3,4,5,6,7];
let sum2: number = 0;
ai2.forEach (function(elem2) {            // = 3. megoldás
    sum2 += elem2;
})
console.log(sum2);

// -----------------------------------------

let ai3: number[] = [3,4,5,6,7];
let sum3: number = 0;
ai3.forEach (elem3 => {
    sum3 += elem3;
})
console.log(sum3);