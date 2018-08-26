'use srtict'

import BaseHero from "./BaseHero";       
import Punchable from "./Punchable";     
  // need a Hero class which implements the Punchable interface
  // vagy .ts-ben default, vagy itt {} ( ha nincs default, akkor itt kell {} ) _ MIÉRT ?

export class Hero extends BaseHero implements Punchable{
  // extends -> sima és abstract parent Class ; implements -> interface Class
          // Hero alá volt húzva.. be kellett másolni a methodokat..
          // akkor minden van az örökítés, ha ígyisúgyis' be kell másolni?
          
  protected motivation: number;          // a number represents how much the hero wants to save the world

  constructor (name: string, motivation: number) {    // sets the hero's name and motivation
    super(name);
    this.motivation = motivation;
  }

  public getMotivationLevel(): number {               // BaseHero-ból // miért kell public ?
    if ( this.motivation < 25 ) {
      return 0
    } else if ( this.motivation > 25 && this.motivation < 40) {
      return 1
    } else {
      return 2
    }
  }
  
  public punch(other: Punchable): void {         // other már egy 

  } 

  public bePunched(damage: number): void {       // interface Punchable-ból 

  }

  public toString(): string {
    return
  }

  
}
 /*
 *  Methods
 *    - punch: take damage on the other hero by using his/her bePunched function with a force
 *    - damage = the puncher hero's motivation / 1.5
 *    - the hero punches other heroes only if his/her motivation level is at least 1
 *
 *    - bePunched: the hero suffers damage, so his/her motivation decreases 
 *    - motivation = motivation - (damage / motivation)
 *
 *    - toString: returns a string status report about the hero
 *      - if the hero's motivation level is 0: {name} is not motivated anymore.
 *      - if the hero's motivation level is 1: {name} is motivated.
 *      - if the hero's motivation level is 2: {name} is well motivated.
 */

const heroes: BaseHero[] = [           
  // itt példányosítja a MarvelHero-t és a DCHero-t, ami a Hero-ból jön (They extend the Hero class)..gondolat foly*
  new MarvelHero('Hulk', 55),
  new MarvelHero('Iron man', 35),
  new MarvelHero('Daredevil'),
  new DCHero('Batman', 60),
  new DCHero('Superman', 25),
  new DCHero('Wonder woman'),
];
  
while(heroes.filter((hero: BaseHero) => hero.getMotivationLevel() > 0).length > 1) {
  heroes.forEach((hero: BaseHero) => {
    heroes
      .filter((otherHero: Hero) => hero !== otherHero)
      .forEach((otherHero: Hero) => hero.punch(otherHero as Punchable));
      // otherHero as Punchable _ piros volt, fő class után kelle írni a "implements Punchable"-t
      //és berakni belőle a "bePunched" függvényt
      // * ???
  }); 
}
  
heroes.forEach((hero: Hero) => console.log(hero.toString()));