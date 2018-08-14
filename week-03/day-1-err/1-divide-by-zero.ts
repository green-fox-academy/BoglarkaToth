'use srtict'
export{}
declare function require(path:string): any;

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

const divider: number = 10;

function takeN(num: number): number {
  let result: number = num / divider;

  try {
    if ( result === 0 ) {
    throw new Error('fail');   
    }
  } catch (e) {
    console.log(e.message);
  }
  return result;

}

takeN(0);