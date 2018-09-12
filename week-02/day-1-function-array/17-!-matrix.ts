'use srtict'
export { }

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console

let matrix1: number[][] = [];
let numberOfLines1 = 5;

for (let i: number = 0; i < numberOfLines1; i++) {
  let matrixRow1 = [];
  for (let j: number = 0; j < numberOfLines1 - i - 1; j++) {
    console.log(matrixRow1.push(0));
  }
  matrixRow1.push(1);
  for (let k: number = 0; k < i; k++) {
    matrixRow1.push(0);
  }
  matrix1.push(matrixRow1);
}
console.log(matrix1);

// -----------------------------------------------------------------------------

let matrix3: number[][] = [];
let numberOfLines3: number = 5;

for (let i = 0; i < numberOfLines3; i++) {
  matrix3[i] = []
  for (let j = 0; j < numberOfLines3; j++) {
    if (j === numberOfLines3 - i - 1) {
      matrix3[i][j] = 1;
    } else {
      matrix3[i][j] = 0;
    }
  }
}
console.log(matrix3);

// -----------------------------------------------------------------------------

const numberOfLines2 = 6;

let twoDimensonalArray2: number[][] = new Array();
for (let a = 0; a < numberOfLines2; a++) {
  twoDimensonalArray2.push([0, 0, 0, 0]);
}

for (let b = 0; b < numberOfLines2; b++) {
  if (b == 0) {
    twoDimensonalArray2.splice(b, 0, [0, 0, 0, 1]);
  }
  else if (b == 1) {
    twoDimensonalArray2.splice(b, 0, [0, 0, 1, 0]);
  }
  else if (b == 2) {
    twoDimensonalArray2.splice(b, 0, [0, 1, 0, 0]);
  }
  else if (b == 3) {
    twoDimensonalArray2.splice(b, 0, [1, 0, 0, 0]);
  }
}

console.log(twoDimensonalArray2[0]);
console.log(twoDimensonalArray2[1]);
console.log(twoDimensonalArray2[2]);
console.log(twoDimensonalArray2[3]);


