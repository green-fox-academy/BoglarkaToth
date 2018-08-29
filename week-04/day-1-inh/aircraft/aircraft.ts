'use srtict'

export class Aircrafts {
  protected ammoStore: number;
  protected damage: number;

  constructor(ammoStore: number, damage: number) {
    this.ammoStore = ammoStore;
    this.damage = damage;
  }

  fight(): number {
    return this.ammoStore = 0;
    this.damage = ;
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

let f16: Aircrafts = new Aircrafts(8, 30);