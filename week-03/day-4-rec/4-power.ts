// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

// power(3,2) -> 3*3
// power(4,3) -> 4*4*4 -> 4*power(4,2)
// power(4,2) -> 4*4 -> 4*power(4,1)
// power(4,1) -> 4 -> 4
// 

// loop
function power(base: number, exponent: number): number {
  // let result: number = 1; // *nál 1el kezdünk, h ne 0vval szorozzunk, ne legyen 0 eredmény. +náál 0val kezdünk
  fi ()
  for (let i: number = 0; i < exponent ; i++) { // mivdel nem ivel szorunk ??
    result *= base;
  }

    return result

}

console.log(power(4,2));

// recursive
function powerNRecursive(base: number, exponent: number): number {
  
  
  powerNRecursive()

}

console.log(powerNRecursive(4,2));