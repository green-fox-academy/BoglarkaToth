'use strict';
export{}

// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.
// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:
// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)
// You should use the command line arguments to accept user input
// It should work like this:
// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye


//Az a const args az beszedi a console-on lévő inputot és berakja egy tömbbe
//És akkor a nulladik elem fogja megmondani h mit csinálj az első és másodikkal.
//Ez egy nagy if else.

const args = process.argv.splice(2); // Just a helper for you to get started



console.log('Input params are', args);