'use strict'

import { Animal } from "./animal";
import { Bird } from "./bird";
import { Flyable } from "./flyable";

export class Tucan extends Bird {
  // extend = Tucan const.a = Bird const.a ?? (lsd Meerkat)

  introduce() {
    console.log('"csipcsip"');
  }

  eat(): void {
    this.isHungry = false;
    console.log('csipeget');
  }  
  play(): void {
    console.log('jacciiiik a tukan');
  }

  breed(): Animal {
    console.log('hoppa egy tojas');
    return new Tucan('kistukan', 2010, false);
  }


}