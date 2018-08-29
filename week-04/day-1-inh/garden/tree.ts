'use strict';
import { Plant } from "./plant";

export class Tree extends Plant {
  constructor(color: string) {
    super(10, 0.4, color);
  }
}
