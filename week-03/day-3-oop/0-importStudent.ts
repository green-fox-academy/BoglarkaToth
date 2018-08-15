import {Student, sayHaho } from "./staticvsobject";

let someoneElse: Student = new Student('Haho', 22, false, false);
someoneElse.bringDollaz(500);
Student.logDollaz();

sayHaho(someoneElse);