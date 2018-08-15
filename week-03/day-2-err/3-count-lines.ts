'use srtict'
export{}
declare function require(path:string): any;
const fs = require('fs');
const charsetEncoding: string = 'utf-8';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.



const fileName: string = 'hello.txt';

const readFromFile = (inputFile: string): number => {
  let content: string = '';
  try {
    content = fs.readFileSync(fileName, charsetEncoding);
    return content.match(/\n/g).length;

  } catch (e) {
    console.log(e.message);
    return 0;
  }
}

console.log(readFromFile(fileName));