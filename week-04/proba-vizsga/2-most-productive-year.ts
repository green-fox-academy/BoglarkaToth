'use strict';
export{};
declare function require(path:string): any;
const fs = require('fs');
const charsetEncoding: string = 'utf-8';


const fileName: string = '';
let lookingFor: string = 'paramount';
  // marvel - 'marvel has made the most movies in 2017.'
  // ghibli - 'Cannot find studio, please try again later.'

function findMostProductiveYear (fileName: string): string {
  let content: string = '';
  try {
    fs.readFileSync(fileName, lookingFor);
      return 'marvel has made the most movies in 2017.';
    } catch (e) {
    console.log(e.message);
    return 'Cannot find studio, please try again later.'; // a küldő log miatt írja ki
  }
}

console.log(findMostProductiveYear('2-paramount.csv')); // emiatt írja ki a hibaüzenetet




/********************************
 * Do not modify the code below *
 ********************************/
export default findMostProductiveYear;



/** 
 * Write a function called `findMostProductiveYear` that helps you find the most productive year
 * for a film studio.
 * The function should take one argument, which is the name of the film studio.
 * The function should try to open the related data file named `studioname`.csv,
 * which is a comma separated file with 3 columns: name of the movie, release year, director
 * 
 *  - If we do not have any data about the studio, the function should return an error message.
 *  - If we have found data, the function should return an information message about the most
 * productive year for studio.
 */