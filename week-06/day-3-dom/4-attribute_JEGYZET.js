// Write the image's url to the console.
let imgSrc = document.querySelector('img');   // document.querySelector('img') => objectet ad vissza
console.log(imgSrc.src);

//  ---------------------------------------------------------------------

// Replace the image with a picture of your favorite animal.
let pathNewImg = './4-attribute-cheetah.jpg';
// lehet const is -- mert az objet property-jeitát lehet írni akkor is, ha cont
imgSrc.src = pathNewImg;

//  ---------------------------------------------------------------------

// Make the link point to the Green Fox Academy website.
let changeWebsite = document.querySelector('a');
// console.log(changeWebsite.href);
let newWebsite = 'https://www.greenfoxacademy.com/';
changeWebsite.href = newWebsite;

//  ---------------------------------------------------------------------

// Disable the second button.
let secondButton = document.querySelector('.this-one');
// vagy:
//let disableButton = document.getElementsByClassName('this-one')
secondButton.disabled = true;

//  ---------------------------------------------------------------------

// Replace its text with 'Don't click me!'.
secondButton.textContent = "Don't click me!";
// vagy:
// secondButton.innerHTML = "Don't click me!";
// innerHTML a >< között mindent cserél

