'use strict';

// Here is an image inspector, but the buttons are not implemented yet, that will be your task!
// - the nav buttons(up, down, left, right) move the background by 10px
// - the zoom buttons increase / decrease the image by 20 %
// - attach only two event listeners to the nav element
// - one for navigation
// - one for zooming

const bubbling = document.querySelector('nav');
const myImg = document.querySelector('div');

bubbling.addEventListener('click', (event) => {
  // dataset.direction == .html-ben data-direction
  if (event.target.dataset.direction === 'up') {
    myImg.style.up -= "10px";
  } else if (event.target.dataset.direction === 'down') {
    myImg.style.down += "10px";
  } else if (event.target.dataset.direction === 'left') {
    myImg.style.left -= "10px";
  } else if (event.target.dataset.direction === 'right') {
    myImg.style.right += "10px";
  }
});



// } else if (event.target.dataset.direction === 'in') {
//   myImg.style.down = "20%";
// } else if (event.target.dataset.direction === 'out') {
//   myImg.style.down = "20%";