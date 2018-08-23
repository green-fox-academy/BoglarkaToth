'use strict'

import { Animal } from "./animal";

export class Meerkat extends Animal {
  // extends = a Merkat const-a = Animal const-a

  play(): void {
    this.isHungry = true;
  }

  breed(): Animal {
    this.isHungry = true;
    this.isSleepy = true;
    let childName: string = this.name + 'son';
    let childYear: number = this.yearOfBirth + 2;
    return new Meerkat(childName, childYear ,this.isDangerous);
  }

  eat(): void {
    this.isHungry = false;
    console.log(`csipegetek! - mondta: ${this.name}`);
  }
}