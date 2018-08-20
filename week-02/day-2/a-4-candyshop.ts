'use strict';
export{}

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(list: any[]){
  sweets.map(function(elem){            // mi baja a map-nek ?
  //                                       mi az -elem- ? (máshonnan emeltem át..)
    if ( elem === 2 || elem === false ) // lehet 2 helyett number, false helyett boolean ?
      elem = 'Croissant'; 
      elem = 'Ice cream';               // kell egy else ?
  })
  }
console.log(sweets(shopItems));
