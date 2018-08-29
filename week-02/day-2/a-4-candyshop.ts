'use strict';
export{}

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(shopItems: any[]): string[] {
  let correctShopList: any[] = [];
  for (let element = 0; element < shopItems.length; element++) {
    if (element === 1) {
      correctShopList.push('Croissant');
    } else if (element === 3) {
        correctShopList.push('Ice cream');
      } else {
        correctShopList.push(shopItems[element]);
      }
  }
  return correctShopList;
}
console.log(sweets(shopItems));

// ------------------------------------------------------------------------

function sweets2(list) {
  for (let i: number = 0; i < list.length; i++) {
      if (list[i] === 2) {
          list[i] = 'Croissant'
      }
      else if (list[i] === false) {
          list[i] = 'Ice cream'
      }
  }
  console.log(list);
}
sweets2(shopItems);

// ------------------------------------------------------------------------

function sweets3 (input: any []) {
  input.splice(1, 1, 'Croissant');
  input.splice(3, 1, 'Ice cream');
  return input;
}
console.log(sweets3(shopItems));
