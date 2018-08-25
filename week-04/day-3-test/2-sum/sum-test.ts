'use strict'
declare function require(path: string): any;
const test = require('tape');

import { SumOfNumbers } from "./sum";

test('test with emty list', (test) => {
  let sumAllOfNumbers: SumOfNumbers = new SumOfNumbers([]);
  test.equal(sumAllOfNumbers.sum(), 0);
  test.end();
})

test('test with elements', (test) => {
  let sumAllOfNumbers: SumOfNumbers = new SumOfNumbers([2, 4, 7, 3, 9]);
  test.equal(sumAllOfNumbers.sum(), 25);
  test.end();
})

//test('test with multiple elements in it', (test) => {
  let sumAllOfNumbers: SumOfNumbers = new SumOfNumbers([]);
  test.equal(sumAllOfNumbers.sum(), 25);
  test.end();
})

//test('test with null', (test) => {
  let sumAllOfNumbers: SumOfNumbers = new SumOfNumbers([]);
  test.equal(sumAllOfNumbers.sum(), );
  test.end();
})

//test('test with a string', (test) => {
  let sumAllOfNumbers: SumOfNumbers = new SumOfNumbers([]);
  test.equal(sumAllOfNumbers.sum(), );
  test.end();
})
