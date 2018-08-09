'use strict';
export {}


let a: number = 3;
a = a + 10;             // make it bigger by 10
console.log(a);

let b: number = 100;
b = b - 7;              // make it smaller by 7
console.log(b);

let c: number = 44;
c = c * 2;              // double c's value
console.log(c);

let d: number = 125;
d = d / 5;              // divide d's value by 5
console.log(d);

let e: number = 8;
e = e * e;            // ???  // what's the cube of e's value?
console.log(e);

let f1: number = 123;
let f2: number = 345;
let bigger: boolean= true;
let smaller: boolean= false;
if ( f1 > f2) {                 // tell if f1 is bigger than f2 (as a boolean)
    console.log(bigger);          
} else {
    console.log(smaller);
}

let g1: number = 350;
let g2: number = 200;
let double: boolean= true;
if ( g2 * 2 > g1 ) {    // PRAS a boolean ??  // tell if the double of g2 is bigger than g1 (pras a boolean)
    console.log(double);
}

let h: number = 1357988018575474;
let divisor: boolean= true;
if ( h % 11 == 0) {                 // tell if h has 11 as a divisor (as a boolean)
    console.log(divisor);
}

let i1: number = 10;
let i2: number = 3;
let or1: boolean= true;

if ( i1 > i2 * i2 || i1 < i2*i2*i2  ) {
    console.log(or1);
}
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
// CUBED ??? 

let j: number = 1521;
let or2: boolean= true;
if ( j % 3 == 0 || j % 5 == 0 ) {       // tell if j is dividable by 3 or 5 (as a boolean)
    console.log(or2);
}


let k: string = 'Apple';
k = k + k + k + k;      // fill the k variable with its content 4 times
console.log(k);