'use strict';

declare function require(path: string): any;

import { test } from 'tape';
const dogNameGen = require('dog-names');

test('One Should equal with Two', (test) => {
  test.deepEqual( { name: 'mark'}, { name: 'mark'}, 'should equal');
  test.end();
})

test('One Should not equal with Two', (test) => {
  test.notEqual( 1, 2, 'should not equal');
  test.end();
})

test('Dog name should not be a number', (test) => {
  let generatedDogName = dogNameGen.femaleRandom();
  test.notEqual( typeof(generatedDogName), 'number', 'pls dont name your dogs like this pls');
  test.end();
})

test('Dog name should not be empty', (test) => {
  let generatedDogName = dogNameGen.femaleRandom();
  test.notEqual( '', generatedDogName, 'pls dont name your dogs like this pls');
  test.end();
})
