'use strict'

import { Animal } from "./animal";

export class Lion extends Animal {
  // extends = a Lion const-a = Animal const-a


  constructor(name: string, yearOfBirth: number) {
    super(name, yearOfBirth, true);
  }

  eat(): void {
    console.log('hamham');
  }  
  
  play(): void {
    console.log('jaccom');
  }

  breed(): Animal {
    console.log('hajaj');
    return new Lion('Simbagyerek', 2010);
  }


}