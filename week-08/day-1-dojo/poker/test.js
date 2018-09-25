'use strict';

const tape = require('tape');
const businessLogic = require('./poker-tellWhosWon');

tape.test('It is a card', t => {
  let actual = true;
  let card = ['2D'];
  t.equal(actual, card);
  t.end();
})
