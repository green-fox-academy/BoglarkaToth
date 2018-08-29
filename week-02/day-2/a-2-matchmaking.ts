'use strict';
export{}

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls: string[], boys: string[]): string[] {
  let allGirlsAndBoys: string[] = [];
  if ( girls.length < boys.length ) {
    for ( let i = 0; i < boys.length; i++ ) {
      if ( girls[i] !== undefined ) {
        allGirlsAndBoys.push(girls[i]);
      }
      allGirlsAndBoys.push(boys[i]);
    }
  }
  return allGirlsAndBoys;
}
console.log(makingMatches(girls, boys));

export = makingMatches;