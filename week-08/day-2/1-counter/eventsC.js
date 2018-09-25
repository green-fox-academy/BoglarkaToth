'use strict';

// On the click of the button,
// Count the items in the list
// And display the result in the result element.

const myButton = document.querySelector('button');
const liCounter = document.querySelector('ul').childElementCount;
const myResult = document.querySelector('.result');

myButton.addEventListener('click', () => {
  myResult.innerHTML = `${liCounter}`;
});
