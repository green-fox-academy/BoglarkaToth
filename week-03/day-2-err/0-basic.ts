'use srtict'
export{}
declare function require(path:string): any;
const fs = require('fs');
const charsetEncoding: string = 'utf-8';

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// GF
function division(a: number, b: number): number {
  if(b === 0) {
    throw new TypeError('Cant divide by zero');
  }
  return a / b;
}

try {
  console.log(division(1,0));
} catch(err) {
  console.log(err.message);
} finally {
  console.log('alma');
}

// -----------------------------------------------------------------------------------

const fileName: string = 'my-text.txt';

let lines: string = 'first, lest...';
let myContent: string = 'szia Soma';

const writeToFile = (inputFile: string, content: string): void => { // content fileName tartalma
  try {
    fs.writeFileSync(fileName, content);     // fs.write.... beleírok fileba, vagyhozok létre újat
  } catch (error) {
    console.log(error);
  }
}
console.log(writeToFile(fileName, myContent));

// -----------------------------------------------------------------------------------

const fileName2: string = 'hello.txt';

const readFromFile = (inputFile: string): string => { // 
  let content: string = null; // null = üres
  try {
    content = fs.readFileSync(fileName2, charsetEncoding); // fs.read.... file tartalmának olvasása
    // a contetet töltse meg a fileName nevű file által mutatott file tartalmával
    return content; // ha sikerül, akkor return
  } catch (error) { // ha nem sikerült 
    console.log(error.message);  // az error legfelő sorát írja ki
    return null;
  }
}
console.log(readFromFile(fileName2));

// -----------------------------------------------------------------------------------

const isWriteable = (path: string): boolean => { // írható-e a file; path KÉSŐBB 
  try {
    fs.accessSync(path, fs.constant.W_OK); // ha ezen a helyen léteik a file és írható
    return true; // akkor retunöl egy truet
  } catch (error) { // ha hibát talál
    return false; // akkor egy false-t
  }
}

if ( !isWriteable(fileName) ) { // ha isW.. nem teljesül a fileName függvénnyel
  console.log('nooooo'); // akkor logolja, h nooo
} else { // ha pedig írható a fileNme
  writeToFile(fileName, 'viszlát Soma'); // akkor a fileName nevű file-ba írja bele...''
}

// -----------------------------------------------------------------------------------
// GF 
function readFromFile2(fileName: string): string {
  try {
    return fs.readFileSync2(fileName, charsetEncoding);
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function writeToAFile2(fileName: string, data: any): void {
  fs.writeFileSyn2c(fileName, data);
}

function countChar2(char: string): number {
  let result2: number = 0;
  const fileContent2: string = readFromFile2('hello.txt');
  if (fileContent2 !== null) {
    fileContent2.split('\r\n').forEach(e => {
      e.split('').forEach(elem => {
        if(elem === char) {
          result2 ++;
        }
      })
    });
    writeToAFile2('result.txt', result2);
    return result2;
  }
}

console.log(countChar2('a'));