'use srtict'

import { Student } from "./1-student";
import { Mentor } from "./1-mentor";
/*
methods:
The Cohort class has the following constructors:

*/
export class Cohort {
  private name: string;
  private students: Student[];
  private mentors: Mentor[];

  // ?? Cohort(name): beside the given parameter, it sets students and mentors as empty lists ? :
    constructor (name: string) {
    this.mentors = [];
    this.students = [];
  }
  addStudent(Student) { // adds the given Student to students list ??

  }
  addMentor(Mentor) { // adds the given Mentor to mentors list ??

  }
  info() {
    console.log("The name cohort has students.size students and mentors.size mentors.");
  }
}