import { appleObject } from "./apple";

'use strict'
declare function require(path: string): any;
const test = require('tape');

test ('apple', function(t) {
  let actual = appleObject.getApple(); // ezt dobja a program
  let expected = 'apple'; // ezt várom

  t.equal(actual, expected);
  t.end();
});
