'use strict';
// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
if(document.querySelectorAll('p')[3].className == 'dolphinC'){
  document.querySelectorAll('p')[0].innerHTML = 'pear';
}

// If the first p has an 'apple' class, replace cat's content with 'dog'
if(document.querySelectorAll('p')[0].className == 'appleC'){
  document.querySelectorAll('p')[2].innerHTML = 'dog';
}

// Make "apple red" by adding a .red class
let appleCName = document.querySelectorAll('p')[0];
// document.querySelectorAll = HTML elementkete hív és array-t ad vissza
// document.querySelectorAll('p') = az összes 'p' tag-et adja vissza egy arrayben
// [0]-val hívom az első 'p' elementet 
appleCName.className = 'appleC red'; // className mindig stringet vár
// className hívja az appleCName class attrubutumát, ami az appleC 
// és ezt írom felül


// Make balloon less balloon-like (change its shape)
let balloonRadius = document.querySelector('.balloonC');
// document.querySelector = egy HTML elementet hív, itt a "p" tag-et
balloonRadius.style.borderRadius = '10%';
// style = css hívása js-ben

