'use srtict'
export{}

// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
 

let drinksM = ['Gin', 'Whiskey', 'Wine', 'Beer'];
drinksM = drinksM.map(elem => {return elem+elem});
console.log(drinksM);

// -----------------------------

// egymás al írja
let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
drinks.forEach(drinks => {
  console.log(drinks + drinks);
});
