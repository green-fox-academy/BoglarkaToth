'use strict'

export abstract class Animal {
  // abstract class =   (lsd Bird)
  protected name: string;
  protected yearOfBirth: number;

  protected isHungry: boolean;
  protected isSleepy: boolean;
  protected isDangerous: boolean;

  constructor(name: string, yearOfBirth: number, isDangerous: boolean) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.isDangerous = isDangerous;
    this.isHungry = false;
    this.isSleepy = false;
  }

  introduce(): void {
    console.log(this.name);
  }
  
  abstract eat(): void
  abstract play(): void
  abstract breed(): Animal

}