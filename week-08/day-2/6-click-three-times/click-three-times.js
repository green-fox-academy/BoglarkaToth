'use strict';

// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded,
// a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

window.onload = () => {
  // az ablak betöltésének az ideje:
  let clickCounter = 0;
  let startTime = new Date().getTime();
  
  const myButton = document.querySelector('button');

  // p tag:
  const myBody = document.querySelector('body');
  const text = document.createElement('p');
  myBody.appendChild(text);
  
  myButton.addEventListener('click', () => {
    clickCounter += 1;
    let clickTime = new Date().getTime();
    let clicking = clickTime - startTime;
    console.log(clickCounter, 'hello', clicking)
    
    if (clickCounter === 3 && clicking < 5000) {
      // text-et itt adombe (ha előbb adom => előbb írja ki)
      text.innerHTML = '5 seconds elapsed and clicked 3 times';
      // console.log(text);
    }
  });

}
