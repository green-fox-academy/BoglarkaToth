'use srtict'
export{}
declare function require(path:string): any; // ???


class Person {
  public name: string;
  public age: number;
  public gender: string;
  constructor (name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + ".");
    
  }
  getGoal() {
    console.log("My goal is: Live for the moment!");
  }
}
let personData = new Person ('Jane Doe', 30, 'female');
personData.introduce();
personData.getGoal();


class Student extends Person {   // extends
  private previousOrganization: string;
  private skippedDays: number;
  constructor (name: string, age: number, gender: string, previousOrganization: string, skippedDays: number) {
    super (name, age, gender);            // super
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }
  introduce() {
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + " from " + this.previousOrganization + " who skipped " + this.skippedDays + " days from the course already.");
  }
  getGoal() {
    console.log("Be a junior software developer.");
  }
}
let studentData = new Student ('Balázs', 10, 'male', "The School of Life", 0);
studentData.introduce();
studentData.getGoal();

/*
level: the level of the mentor (junior / intermediate / senior)
methods:
introduce(): "Hi, I'm name, a age year old gender level mentor."

Mentor(name, age, gender, level)
Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate
*/
class Mentor extends Person {   // extends
  private level: string;
  constructor (name: string, age: number, gender: string, level: string ) {
    super (name, age, gender);            // super
    this.level = level; // junior / intermediate / senior
  }
  introduce() {
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + this.level + " mentor.");
  }
  getGoal() {
    console.log("Educate brilliant junior software developers.");
  }
}
let mentorData = new Mentor ('Anna', 26, 'female', "intermediate");
studentData.introduce();
studentData.getGoal();









class Sponsor extends Person {   // extends
  private company: string;
  private hiredStudents: number;
  constructor (name: string, age: number, gender: string, company: string, hiredStudents: number) {
    super (name, age, gender);            // super
    this.company = company;
    this.hiredStudents = hiredStudents;
  }
  introduce() {
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + " who represents " + this.company + " and hired " + this.hiredStudents + " students so far.");
  }
  hire() {
    console.log(1);
  }
  getGoal() {
    console.log("Hire brilliant junior software developers.");
  }
  }
let sponsorData = new Sponsor ('Kinga', 33, 'male', "Google", 1);
sponsorData.introduce();
sponsorData.hire();
sponsorData.getGoal();