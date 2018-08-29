'use srtict'

import { Person } from "./person";

export class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;
  constructor (name: string = 'Jane Doe', age: number = 20, gender: string = 'female',
                company: string = 'Google') {
    super (name, age, gender);            // super
    this.company = company;
    this.hiredStudents = 0;   // studentnél uez van :
    /*
    Sponsor(name, age, gender, company): beside the given parameters,
    it sets hiredStudents to 0
    Sponsor(): sets name to Jane Doe, age to 30, gender to female,
    company to Google and hiredStudents to 0
    */
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender}
                who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }
  hire() {
    this.hiredStudents ++;
  }
  getGoal() {
    console.log("My goal is: Hire brilliant junior software developers.");
  }
}