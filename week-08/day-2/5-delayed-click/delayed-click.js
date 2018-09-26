'use strict';

// Create a simple HTML document with one button.
// If the user clicks the button it should wait 2 seconds and it should show a text under the button:
// 2 seconds ellapsed
window.onload = () => {
  const myBody = document.querySelector('body')
  const myButton = document.querySelector('button');
  const text = document.createElement('p')
  myBody.appendChild(text);
  

  myButton.addEventListener('click', () => {
    setTimeout(() => {
      text.innerHTML = '2 seconds ellapsed';
      console.log('2 seconds ellapsed');
    }, 2000);
  });
}
