'use strict';

import { Plant } from "./plant";
import { Flower } from "./flower";
import { Tree } from "./tree";

class Garden {
  plants: Plant[];

  constructor() { // nemcsinál semmit, csak létrehoz
    this.plants = [];
  }

  showGarden() {
    this.plants.forEach(element => {
      console.log(`The ${element.color} ${element.constructor['name']} ${element.needWaterString()}`);
    });
  }

  wateringAllPlants(allWater: number) {
    let needsWaterArray: Plant[] = [];

    /*this.plants.forEach(element => {
      if (element.currentWater < element.needWater) {
        needsWaterArray.push(element);
      }
    });*/

    needsWaterArray = this.plants.filter(element =>
      element.currentWater < element.needWater
    )
    // filter az eleme/funkciója mindig egy eldöntendő ... ha true, akkor pusholja a
    
    needsWaterArray.forEach(element => {
      element.watering(allWater / needsWaterArray.length);
    });

    console.log(`Watering with ${allWater}`);
    this.showGarden();

  }
}

let myGarden: Garden = new Garden();

let yellowFlower: Plant = new Flower('yellow');
let blueFlower: Plant = new Flower('blue');
let purpleTree: Plant = new Tree('purple');
let orangeTree: Plant = new Tree('orange');

myGarden.plants.push(yellowFlower, blueFlower, purpleTree, orangeTree); // a myGarden plants-ébe pusholom bele a flowereket és a treeket
myGarden.showGarden();
myGarden.wateringAllPlants(40);
myGarden.wateringAllPlants(70);
