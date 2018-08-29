'use srtict'

import { Person } from "./1-person";
import { Student } from "./1-student";
import { Mentor } from "./1-mentor";
import { Sponsor } from "./1-sponsor";
import { Cohort } from "./1-cohort";


let people: Person[] = [];

let mark: Person = new Person("Mark", 46, "male");
people.push(mark);                                      // people ??    .puch??

let jane: Person = new Person();
people.push(jane);

let john: Person = new Student("John Doe", 20, "male", "BME");
people.push(john);

let student: Student = new Student();
people.push(student);

let gandhi: Mentor = new Mentor("Gandhi", 148, "male", "senior");
people.push(gandhi);

let mentor: Mentor = new Mentor();
people.push(mentor);

let elon: Sponsor = new Sponsor("Elon Musk", 46, "male", "SpaceX");
people.push(elon);

let sponsor: Sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i: number = 0; i < 6; i++) {
  elon.hire();
}

for (let i: number = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome: Cohort= new Cohort("AWESOME");   // ??
awesome.addStudent(student);                  // add??
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();




/*
let person1 = new Person (); // ez esetben a beépített adatokkal fog lefutni (argument_értéket vár)
let person2 = new Person ('Jázmin', 30, 'female'); // ezesetben aezekkel az adatokkal fog lefutni
let person3 = new Person ('Ramona');

let student1 = new Student ('Balázs', 10, 'male', "The School of Life", 0);

person1.introduce();
person1.getGoal();

student1.introduce();
student1.getGoal();


let mentor1 = new Mentor ('Anna', 26, 'female', "intermediate");
mentor1.introduce();
mentor1.getGoal();


let sponsor1 = new Sponsor ('Kinga', 33, 'male', "Google", 1);
sponsor1.introduce();
sponsor1.hire();
sponsor1.getGoal();
*/