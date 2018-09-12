'use stict';

// fill every paragraph with the last one's content:
//  .innerHTML helyett .innerText

// fill every paragraph with the last one's content keeping the cat strong:

let allTogether = document.getElementsByTagName('p');
let animal = document.getElementsByClassName('animals');
// let animal = allTogether[allTogether.length-1].innerHTML;
for ( let i = 0; i < allTogether.length; i++) {
  allTogether[i].innerHTML = animal[0].innerHTML;
  // allTogether[i].innerHTML = animal;
}
