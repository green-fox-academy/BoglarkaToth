'use strict';

// Create an event listener which logs the current timestamp to the console once the button is clicked.
// When the button is clicked for the second or any other times no event listener should be called.
// Try to solve this two different ways.
// hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

const myButton = document.querySelector('button');

const callback = () => {
  console.log(Date.now() / 1000);
    // myButton.removeEventListener('click', callback);
    // VAGY:
    myButton.disabled = true;
    
}

myButton.addEventListener('click', callback);
