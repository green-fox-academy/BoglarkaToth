'use srtict'
export{}
declare function require(path:string): any;
const fs = require('fs');
const charsetEncoding: string = 'utf-8';

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'


const fileName: string = 'my-tex.txt';

const readFromFile = (inputFile: string): string => {
  let content: string = '';
  try {
    content = fs.readFileSync(fileName, charsetEncoding);
    return content;
  } catch (e) {
    console.log(e.message);
    return 'hibaüzenet';
  }
}

console.log(readFromFile(fileName));