'use srtict'
/*
There are 2 types of aircrafts: F16 and F35
Both aircraft should track how many ammo it has
*/
export class Aircrafts {              // Create a class that represents an aircraft
  
  protected types: [];                
  protected ammoStore: number;
  protected damage: number;
  
  constructor (types: any[], ammoStore: number, damage: number) {
    this.types = Aircrafts ??? [];
    this.ammoStore = ammoStore;
    this.damage = damage;
  }


  fight(): number {
    return this.ammoStore = 0; 
    //It should use all the ammos (set it to 0) and it should return the damage it deals
      this.damage = ;
    //The damage is the multiplication of the base damage and the ammos
  }

  refill(): number {
    return
  }

  getType(): string {
    return
  }

  getStatus(): string {
    return
  }

  isPriorityFill(): boolean {
    return
  }
}

let f16: Aircrafts = new Aircrafts ("F16", 8 , 30);