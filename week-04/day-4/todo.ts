'use strict';
declare function require(path: string): any;
const fs = require('fs');
const process = require('process');

console.log(process.argv);

if(process.argv[2] === '-a') {                              // mi a 2 ?
  for(let i: number = 3; i < process.argv.length; i++ ) {   // mi a 3 ?
    fs.appendFileSync('todo.txt', process.argv[i] + '\n');
  }
} else if(process.argv[2] === '-l') {
  for(let i: number = 3; i < process.argv.length; i++ ) {
    fs.appendFileSync('todo.txt', process.argv[i] + '\n');
  }
} else if(process.argv[2] === '-r') {
  for(let i: number = 3; i < process.argv.length; i++ ) {
    fs.appendFileSync('todo.txt', process.argv[i] + '\n');
  }
} else if(process.argv[2] === '-c') {
  for(let i: number = 3; i < process.argv.length; i++ ) {
    fs.appendFileSync('todo.txt', process.argv[i] + '\n');
  }
}
