'use strict';

const kids = [
  { 'petName': 'Wattled crane', 'owner': 'Bryant' },
  { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
  { 'petName': 'Mynah, common', 'owner': 'Nelie' },
  { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
  { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
  { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
  { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
  { 'petName': 'Bison, american', 'owner': 'Tommie' },
  { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
  { 'petName': 'Carpet snake', 'owner': 'Veda' },
  { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];
// 1) Create an <article> element for each kid
// 2) Create a <h3> and a <p> element for each article and append them as a child to the <article>
//     - The H3 should contain the owner's name
//     - The p should contain the pet's name
// 3) Add the article to the pets div.

let newDiv = document.querySelector('div');

kids.forEach(element => {
  let newArticle = document.createElement('article');
  let newH3 = document.createElement('h3');
  let newP = document.createElement('p');
  newH3.className = 'owner';                  // 'owner' string lesz a class = értéke
  newH3.textContent = element.owner;    // owner key value-ja = text
  newP.className = 'petName';
  newP.textContent = element.petName;
  newArticle.appendChild(newH3);
  newArticle.appendChild(newP);
  newDiv.appendChild(newArticle);
});
