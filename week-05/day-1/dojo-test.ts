'use strict';

import { test } from 'tape';
import { anagram } from './dojo-index';


// check if the two strings are the same
test((test) => {
  let firstString: string = 'listen';
  let secondString: string = 'listen';

  test.equal(anagram(firstString, secondString), true);
  test.end();
});


//check if they're the same length
test((test) => {
  let firstString: string = 'listen';
  let secondString: string = 'silent';

  test.equal(anagram(firstString, secondString), true);
  test.end();
});

//check if they're the same after sorting
test((test) => {
  let firstString: string = 'listen';
  let secondString: string = 'silent';

  test.equal(anagram(firstString, secondString), true);
  test.end();
});
