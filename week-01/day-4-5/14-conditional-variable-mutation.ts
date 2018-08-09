'use strict';
export { }

let a: number = 24;
let out: number = 0;

if (a % 2 === 0) {
    out++;                      // if a is even increment out by one
}
console.log(out);

// ----------------------------------------

let b: number = 13;
let out2: string = '';

if (b > 10 && b < 20) {
    out2 = "Sweet!";            // if b is between 10 and 20 set out2 to "Sweet!"
} else if (b < 10) {
    out2 = "Less!";             // if less than 10 set out2 to "Less!",
} else {
    out2 = "More!";             // if more than 20 set out2 to "More!"
}
    console.log(out2);

    // ----------------------------------------

    let c: number = 123;
    let credits: number = 100;
    let isBonus: boolean = false;

    if (credits >= 50 && !isBonus) {   // !isBonus = isBonus === false
        c = c - 2;                 // if credits are at least 50, and is_bonus is false decrement c by 2
    } else if (credits < 50 && !isBonus) {
        c--;                      // if credits are smaller than 50, and is_bonus is false decrement c by 1
    } else if (isBonus){               // isBonus = isBonus === true
        c;                        // if is_bonus is true c should remain the same
    }
    console.log(c);

    // ----------------------------------------

    let d: number = 8;
    let time: number = 120;
    let out3: string = '';

    if (d % 4 == 0 && d < 200) {
        out3 = "check";         // if d is dividable by 4 and time is not more than 200 set out3 to "check"
    } else if (time > 200) {
        out3 = "Time out";          // if time is more than 200 set out3 to "Time out"
    } else {
        out3 = "Run Forest Run!";   // otherwise set out3 to "Run Forest Run!"
    }
    console.log(out3);