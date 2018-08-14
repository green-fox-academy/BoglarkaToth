'use srtict'
export{}
declare function require(path:string): any;
const fs = require('fs');
const charsetEncoding: string = 'utf-8';

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
/*

const fileName: string = 'hello.txt';

const readFromFile = (inputFile: string): string => { // 
  let content: string = null; // null = üres
  try {
    content = fs.readFileSync(fileName, charsetEncoding); // fs.read.... file tartalmának olvasása
    // a contetet töltse meg a fileName nevő file által muutattt tartalmábval
    return content; // ha sikerül, akkor return
  } catch (error) { // ha nem sikerült 
    console.log(error.message);  // az error legfelő sorát írja ki
    return null;
  }
}
console.log(readFromFile(fileName));
*/

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