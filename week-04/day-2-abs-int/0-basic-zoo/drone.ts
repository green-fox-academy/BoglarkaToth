'use strict'

import { Bird } from "./bird";
import { Flyable } from "./flyable";

export class Drone implements Flyable {  
  // imlements = megfelelteti ???   (lsd Bird )
  fly(): void {
    throw new Error("Method not implemented.");
  }  takeOff(): void {
    throw new Error("Method not implemented.");
  }
  landing(): void {
    throw new Error("Method not implemented.");
  }
  keringes?(): void {
    throw new Error("Method not implemented.");
  }
 

  
}