'use strict'

import { Animal } from "./animal";
import { Meerkat } from "./meerkat";
import { Zoo } from "./zoo";
import { Lion } from "./lion";
import { Tucan } from "./tucan";
import { Drone } from "./drone";
import { Flyable } from "./flyable";
// bird nem kell ?? csak, amit kér alább a program.ts, azt importálom

let zoo: Zoo = new Zoo('Fovarosi Allat es N... ', 2018);
            // példányosítás = meghívom a Zoo constructorát = ez lesz a "sablon"om
zoo.log() // meghívom new Zoo = Fővárosi példánynak a log nevű metódusát

let zoo2: Zoo = new Zoo('Miskolci... ', 2018); // példányosítás = meghívom a constructort
zoo2.log() // meghívom new Zoo=a Miskolci példánynak a log nevű metódusát

let myMeerkat: Animal = new Meerkat('Timon', 2000, false);//Meerkat const-át használja..(lsd M.ts)
let myLion: Lion = new Lion('Mufasa', 2000); // így is lehet -> Animal vagy Lion
let myTucan: Animal = new Tucan('Zazu', 2010, false);

zoo.addAnimal(myMeerkat); // Fővárosiba pusholja a myMeerkat-et, aki Timon...
zoo.addAnimal(myLion);
zoo.addAnimal(myTucan);
zoo.log();

let myOtherTucan: Tucan = new Tucan('Zuza', 2007, true);
let myNewDrone: Drone = new Drone();

let myList: Flyable[] = [];
myList.push(myOtherTucan);
myList.push(myNewDrone);

myList.forEach(o => {
  //because in Fyable the keringes method is optional, we have to check if the current object has it
  if (o.keringes) {
    // mivel a keringes m opcionálisn van megadva a Flyable-ben,
    // meg kell néznem, h a myList-Tucannak/Drone-nak van-e
    o.keringes();
  }
});