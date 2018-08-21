export class Student {
  private static dollaz: number = +0;
  private name: string;
  private age: number;
  private hasWeapon: boolean;
  private hasAlcohol: boolean;
  
  constructor(name: string, age: number, hasWeapon: boolean, hasAlcohol: boolean ){
    this.name = name;
    this.age = age;
    this.hasWeapon = hasWeapon;
    this.hasAlcohol = hasAlcohol;
    Student.dollaz += 1_000_000_000;
  }
  static addDollaToDollaz(thisAmount: number): void {
    this.dollaz += thisAmount;
  }
  static logDollaz() {
    console.log('Class dollaz here:', this.dollaz); 
  }
  bringDollaz(thisAmount: number): void {
    if(thisAmount >= 0) {
      Student.addDollaToDollaz(thisAmount);
    } else {
      throw new Error('vedd ki a kezed a kasszabol plez')
    }
  }
  sayHi() {
    console.log('hi');
  }
}

export const sayHaho = (student: Student) => {
  student.sayHi();
}
let markNameless = {name: 'Mark', age: 18, hasWeapon: false, hasAlcohol: true};

let markStudent: Student = new Student('Mark', 18, true, false);
let arnikaStudent: Student = new Student('Arnika', 18, true, false);

Student.logDollaz();

markStudent.bringDollaz(500000);
Student.logDollaz();

Student.logDollaz();

try {
  arnikaStudent.bringDollaz(-600000000);
} catch (error) {
  console.log('Arnika pls');
}

export * from "./staticvsobject";