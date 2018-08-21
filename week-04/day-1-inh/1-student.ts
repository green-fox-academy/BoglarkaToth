'use srtict'

import { Person } from "./1-person";      // villanykörte hozza ki

export class Student extends Person {
  private previousOrganization: string;
  private skippedDays: number; // nincs a contr mögöt ... miért??
  constructor (name: string = 'Jane Doe', age: number = 20, gender: string = 'female',
                previousOrganization: string = 'The School of Life') {
    super (name, age, gender);                       // super (TS ki kell írni, pl Javaban em)
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;       // default _ minden innen indul(0-ról)  
    // ezt kéri a feladat vagy ezt a constr mögé kell írnom??? :
    /*
    mit hova kel írni??
    Student(name, age, gender, previousOrganization): beside the given parameters,
    it sets skippedDays to 0
    Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to
    The School of Life, skippedDays to 0
    */
  }
  getGoal() {
    console.log("Be a junior software developer.");
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender} from 
            ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`);
  }
  skipDays(numberOfDays) {
    console.log(this.skipDays += numberOfDays);
  }
}

// student1.introduce(); // Árnika megnézi miért piros



/*introduce() {
    super.introduce(); // hívd meg a felette lévőt 
    console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`);
        // itt kiírja az új adatokkal 
        // tehát két eredményt fog kiírni
  }
  */