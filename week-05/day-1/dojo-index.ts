'use strict';

export function anagram (string1: string, string2: string): boolean {
  let string1ToArray: string  = string1.split('').sort().join('');
  let string2ToArray: string  = string2.split('').sort().join('');

  if (string1ToArray === string2ToArray) {
    return true;
  } else {
    return false;
  }
}
