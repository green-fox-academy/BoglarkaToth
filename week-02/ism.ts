'use strict';

let elements: any[] = [ { name: 'Mark'},
  { name: 'Mappabá'}, { name: 'Jozsef'},
  {name: 'Ottokar'}, {name: 'Babi neni'},
  {name: 'Szigfried'}, {name: 'Anyam'}, ];


const withLetter = (filterBy: string): any[] => {
  return elements.filter( (value, index, array) => {// KIVÁLOGAT
    return value.name.indexOf(filterBy) >= 0;
  });
}

const log = (param: any[]): void => {
  param.forEach( (value, index, array) => {
    console.log(value);
  })
}

const lowerCase = (param: any[]): any[] => {
  return param.map( (value, index, array) => { // AZ ÚJ TMBÖT VISSZAKAPOM   // ez a return a mapnek szól
      return { name: value.name.toLowerCase() }; // ez a return a függvénynek szól
  });
}

log(lowerCase(elements));

log(withLetter('Ma'))



/*
foreach _ kifelé
map, filter _ visszakapunk vmit
*/