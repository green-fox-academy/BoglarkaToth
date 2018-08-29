'use srtict'

import { Person } from "./1-person";

export class Mentor extends Person {
  private level: string; 
    // level: the level of the mentor (junior / intermediate / senior) -- ezt hogy hova definiálom ??
  constructor (name: string = 'Jane Doe', age: number = 20, gender: string = 'felmale', 
                level: string = 'intermediate') {
    super (name, age, gender);            // super
    this.level = level;    // junior / intermediate / senior -- ezt hogy hova definiálom ??
  }
  getGoal() {
    console.log("My goal is: Educate brilliant junior software developers.");
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}
