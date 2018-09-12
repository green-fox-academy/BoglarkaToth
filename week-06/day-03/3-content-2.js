'use strict';

// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
// 2) change the <ul> element's background color to 'limegreen'
// - use css class to change the color instead of the style property

let listItem = document.getElementsByTagName('li');
let newItem = ['apple', 'banana', 'cat', 'dog'];
for(let i = 0; i < listItem.length; i++){
  listItem[i].innerHTML = newItem[i];
}

let ulColor = document.getElementsByTagName('ul');
ulColor[0].setAttribute('style', 'background-color: limegreen')
// getAttribute = eredeti linket mutat, lehív
