'use strict';
// Add an item that says 'The Green Fox' to the asteroid list.
let ulTag = document.querySelector('ul');
let newLi1 = document.createElement('li');
newLi1.innerHTML = 'The Green Fox';
// vagy textContent
ulTag.appendChild(newLi1);
// appenChild = függvény = objektumot vár


// Add an item that says 'The Lamplighter' to the asteroid list.
let newLi2 = document.createElement('li');
newLi2.innerHTML = 'The Lamplighter';
// vagy textContent
ulTag.appendChild(newLi2);


// Add a heading saying 'I can add elements to the DOM!' to the .container.
let newDiv = document.querySelector('div');
newDiv.innerHTML = '<h1>I can add elements to the DOM!</h1>';
// NEM lehet textContent !!

// vagy:
// let newH1 = document.createElement('h1');
// newH1.innerHTML = 'I can add elements to the DOM!';
// newDiv.appendChild(newH1);
// vagy textContent


// Add an image, any image, to the container.
let newImg = document.createElement('img');
newImg.src = './4-attribute-cheetah.jpg';
newDiv.appendChild(newImg);
