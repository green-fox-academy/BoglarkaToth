'use strict'

import { Animal } from "./animal";
import { Flyable } from "./flyable";

export abstract class Bird extends Animal implements Flyable {
  // abstract    =   (lsd Animal)
  // extends     = Bird const.a = Animal const.a ?? (lsd Meerkat)
  // implements  = megfelelteti ???     (lsd Drone)

  keringes(): void {
    console.log(`${this.name}: elrepultem`);
  }
  fly(): void {
      if (this.isHungry) {
        console.log('ehes vagyok, nem repulok sehova');
      } else {
        console.log('elrepultem');
        this.isHungry = true;
      }
  } 

  takeOff(): void {
    throw new Error("Method not implemented.");
  }

  landing(): void {
    throw new Error("Method not implemented.");
  }


}