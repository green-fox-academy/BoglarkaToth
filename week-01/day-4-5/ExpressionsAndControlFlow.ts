// Define several things as a variable, then print their values
// Your name as a string
let me: string= "Bog";
// Your age as an integer
let age: number= 36;
// Your height in meters as a float
let height: number= 1.6;
// Whether you are married or not as a boolean
let married: boolean= false;
console.log(me + " " + age + " " + height + " " + married);


let a: number = 3;
a = a + 10;
// make it bigger by 10
console.log(a);

let b: number = 100;
b = b - 7;
// make it smaller by 7
console.log(b);

let c: number = 44;
c = c * 2;
// double c's value
console.log(c);

let d: number = 125;
d = d / 5;
// divide d's value by 5
console.log(d);

let e: number = 8;
e = e * e;
// what's the cube of e's value?
console.log(e);

let f1: number = 123;
let f2: number = 345;
console.log (f2 > f1);

// tell if f1 is bigger than f2 (as a boolean)


let g1: number = 350;
let g2: number = 200;
console.log(g2*2 > g1);
// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
let eger: boolean= true;
    if (( h % 11 ) == 0) {
        console.log(eger);
    } else {
        eger = false;
        console.log(eger);
    }
// tell if h has 11 as a divisor (as a boolean)


let i1: number = 10;
let i2: number = 3;

let i2squared: number = i2 * i2;
let i2cubed: number = i2 * i2 * i2;
let bigger: boolean = false;

if ( i1 > i2squared && i1 < i2cubed) {
    bigger = true;
    console.log(bigger);
}

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)






let j: number = 1521;

console.log(j % 3 == 0 || j % 5 == 0);
  
// Osztható-e -számmal- = diviadable =      % -szám- == 0

// tell if j is dividable by 3 or 5 (as a boolean)






let k: string = 'Apple';

// fill the k variable with its content 4 times

console.log(k+k+k+k)






let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let secDay: number= 86400;
let secToday: number= (currentHours *60 *60) + (currentMinutes *60 ) + currentSeconds;

console.log(secDay-secToday);

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables







let a: number = 24;
let out: number = 0;

if ( a % 2 == 0) {
    out++;
}
    console.log(out);

// if a is even increment out by one





let b: number = 10;
let out2: string = '';

if ( b > 10 && b < 20) {
    out2 = "Sweet!";
    } else if ( b < 10 ) {
        out2 = "Less!";
        } else if ( b > 20 ) {
        out2 = "More!";  
        }

console.log(out2);

// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"








let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if ( credits >= 50 && !isBonus ) {
    c-=2; // c = c - 2     c+=2  c = c + 2
    } else if ( credits < 50 && !isBonus) {
        c-=1;
        } else if ( isBonus ){
            c;
            }

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

console.log(c);








let d: number =  8;
let time: number = 120;
let out3: string = '';

if ( d % 4 == 0 && time < 200 ) {
    out3 = "check";
    } else if ( time > 200 ) {
        out3 = "time out";
        } else {
            out3 = "run forest run";
            }

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

console.log(out3);






