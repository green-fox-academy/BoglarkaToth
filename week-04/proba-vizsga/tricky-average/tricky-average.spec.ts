'use strict'
export{}

declare function require(path: string): any;
const test = require('tape');

import { test } from 'tape';
import getTrickyAvg from './tricky-average';


test('your test case 1', (t) => {
  let allTheNumbers: number[] = [3, -1, 5, 8, 6];
  let expected: number = getTrickyAvg(allTheNumbers);

  t.equal(3.5, expected);
  t.end();
})

test('your test case 2', (t) => {
  t.equal(getTrickyAvg([2, 6, 1, 10]), 5.5);
  t.end();
})
