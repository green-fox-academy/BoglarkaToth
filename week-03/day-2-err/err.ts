'use srtict'
export{}
declare function require(path:string): any;
const fs = require('fs');
const charEncoding = 'utf-8';



function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, charEncoding);
  } catch (e) {
    console.log(e.message);
    return null;
  }
}


function writeToAFile(fileName: string, data: string): void {
  fs.readFileSync(fileName, data);
}

writeToAFile('hell.txt', 'hello coffee');


console.log(readFromFile('hello.txt'));