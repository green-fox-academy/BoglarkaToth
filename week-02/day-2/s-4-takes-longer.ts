'use strict';
export{}

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let plusQuote: string = 'always takes longer than ';

let searchYou: number = quote.search('you');
let fristPart: string = quote.slice(0, searchYou);
let secondPart: string = quote.slice(searchYou);
quote = fristPart + plusQuote + secondPart;

console.log(quote);