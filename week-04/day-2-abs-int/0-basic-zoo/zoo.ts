'use strict'

import { Animal } from "./animal";

export class Zoo {
  // alap class = ebből indul ki minden = ez van örökítva (inheritance)   ????
  private animals: Animal[];
  private name: string;
  private yearOfFounding: number;

  constructor(name: string, yearOfFounding: number) {
    this.name = name;
    this.yearOfFounding = yearOfFounding;
    this.animals = [];
  }

  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  breedAll() {
    let babyAnimals: Animal[] = this.animals.map(a => a.breed());
    this.animals.concat(babyAnimals);
  }

  log() {
    console.log(`This Zoo has ${this.animals.length} animal(s). Their names are: `);
    this.animals.forEach(a => a.introduce());
  }
  
}