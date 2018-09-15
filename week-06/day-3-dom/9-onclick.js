'use strict';
// Turn the party on and off by clicking the button. (the whole page)

const newButton = document.querySelector('button');
let newDiv = document.querySelector('div');
let isOff = true;

newButton.onclick = () => {
  if (isOff == true) {
    isOff = false;
    newDiv.className = 'party';
  } else {
    isOff = true;
    newDiv.className = '';
  }
};