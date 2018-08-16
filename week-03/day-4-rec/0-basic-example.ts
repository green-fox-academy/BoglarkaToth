'use strict';

function factorialIterationIfWhile(n: number): number {
  if (n == 0 || n==1) {
    return 1;             // kilépési érték
  }
  let result = n;
  while (n > 1) {
    result = result * (n - 1);
    n = n - 1;
  }
  return result;
}
console.log(factorialIterationIfWhile(5));

// ---------------------------

function factorialRecursive(m: number): number {
  if (m == 0 || m==1) {
    return 1;
  }
  return m * factorialRecursive(m - 1);           // itt hívja meg önmagát
}
console.log(factorialRecursive(5));
/*
Beadod az 5-ot. 
Az nem 0 vagy 1
Megy az elsebe
returnold az 5 * Factorial(4)-et
Újra a függvény elejére ugrik. Csak az n az 4
Nem 0 vagy 1
Else
Returnold a 4 * Factorila(3)-at
Újra eleje
Nem 0,1
Else
Returnold a 3 * Factorial(2)
Eleje, nem 01, else
Return 2 * Factorial(1)
NA ÉS MOST
Eleje
Na az n az 1 szóval return 1

És most jön a lényeg
Szépen visszahelyettesítgeti az értékeket

Szóval ebből:
5 * Factorial(4) * Factorial(3) * Factorial(2) * Factorial(1)
Lesz:
5 * Factorial(4) * Factorial(3) * Factorial(2) * 1
Majd
5 * Factorial(4) * Factorial(3) * 2 * 1
Majd végül:
5*4*3*2*1
*/

// https://www.youtube.com/watch?v=uyjsR9eNTIw&feature=share


// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------


var factorFor = function(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factorFor(6));
// 720

// ---------------------------

var counter = 10;
while(counter > 0) {
    console.log(counter--);
}

// ---------------------------

var countdownIfElse = function(value) {
  if (value > 0) {
      console.log(value);
      return countdownIfElse(value - 1);
  } else {
      return value;
  }
};
countdownIfElse(10);

// ---------------------------

var factorialRecursive2 = function(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorialRecursive2(number - 1));
  }
};
console.log(factorialRecursive2(6));
// 720


// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------


class Greeter {
  static fact:number;
  fact = 1;
  constructor()
  {
  }
  factorial(num: number): number
  {
    if (num > 0) {
      this.fact = this.fact * num;
      this.factorial(num - 1);
  }
  return this.fact;  
  }
}

window.onload = () => {
  var fact: number, num: number;
  num = parseInt(prompt("Enter a number"));
  var greeter = new Greeter();
 fact=greeter.factorial(num);
 alert("Factorial of a number is->" + fact);
};
