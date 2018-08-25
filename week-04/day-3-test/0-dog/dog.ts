'use strict'

export class Dog {
  private name: string;
  private age: number;
  private canBark: boolean;

  constructor(name: string = 'Pötyi', age: number = 1, canBark: boolean = true) {
    this.name =  name;
    this.age = age;
    this.canBark = canBark;
  }
  
  bark(): string {
    if( this.canBark ) {
      return `Bark-Bark, Woof, woof ${this.name}`
    }
    else {
      return ``;
    }

  }
  intro(): string {
    return this.name;
  }

}
