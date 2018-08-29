'use strict';
/*The Flower
needs water if its current water amount is less then 5
when watering it the flower can only absorb the 75% of the water
eg. watering with 10 the flower's amount of water should only increase with 7.5*/

export abstract class Plant {
  currentWater: number;
  needWater: number;
  absorbWater: number;
  color: string;

  constructor(needWater: number, absorbWater: number, color: string) {
    this.currentWater = 0;
    this.needWater = needWater;
    this.absorbWater = absorbWater;
    this.color = color;
  }

  needWaterString() {
    if (this.currentWater < this.needWater) {
      return 'needs water.'
    } else {
      return 'doesn\'t need water.'
    }
  }

  watering(getWater: number) {
    this.currentWater += getWater * this.absorbWater;
  }
}
