'use srtict'
export{}

// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
 
// egymás al írja -- nem úgy ahogy a feladat kéri !!! ?????

let drinks: strin[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
drinks.forEach(drinks => {
  console.log(drinks + drinks);
});












/*
let drinksM = ['Gin', 'Whiskey', 'Wine', 'Beer'];

drinks = drinksM.map(elem => elem+elem);

console.log(drinksM);



let numbers: number[] = [1,2,3];

numbers.forEach(number2 => {
  return
  number2++;
 });

 let incrementedNumbers = numbers.map(number2 => {
  return
  number2++;
 });

 console.log(numbers);
 console.log(incrementedNumbers);
 */