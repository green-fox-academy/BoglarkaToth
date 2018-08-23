'use strict'

export interface Flyable {
  // interface = 
  fly(): void;
  takeOff(): void;
  landing(): void;
  keringes?(): void; // aki imp engem az dötse el, h kell-e vayg nem...
}
