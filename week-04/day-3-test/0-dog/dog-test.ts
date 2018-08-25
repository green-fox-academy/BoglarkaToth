'use strict'
declare function require(path: string): any;
const test = require('tape');

import { Dog } from './dog';
import { test } from 'tape';

test('dog should have a name', (test) => {
  let siegfrid: Dog = new Dog('Siegfrid', 1.00001, true);
  test.notEqual( '', siegfrid.intro(), 'should have a name longer than zero'); 
  test.end();
})

test('dog can bark', (test) => {
  let siegfrid: Dog = new Dog('Siegfrid', 1.00001, true);
  test.notEqual( '', siegfrid.bark(), 'should bark longer than zero'); 
  test.end();
})
