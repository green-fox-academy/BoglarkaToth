'use strict'
export{}

declare function require(path: string): any;
const test = require('tape');

import { test } from 'tape';
import getTrickyAvg from './1-tricky-average';

test('your test case 1', (t) => {
  test.equal(getTrickyAvg([3, -1, 5, 8, 6]), 3.5);
  test.end();
})

test('your test case 2', (t) => {
  test.equal(getTrickyAvg([2, 6, 1, 10]), 5.5);
  test.end();
})
