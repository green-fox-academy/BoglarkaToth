'use strict';
export{};
declare function require(path:string): any;
const fs = require('fs');
const charsetEncoding: string = 'utf-8';


function findMostProductiveYear (lookingFor: string): string {
  const fileNameMarvel: string = 'marvel.csv';
  const fileNameParamount: string = 'paramount.csv';
  let fileName: string = '';
  if ( lookingFor === 'marvel') {
    fileName = fileNameMarvel;
  } else if ( lookingFor === 'paramount') {
    fileName = fileNameParamount;
  }
  try {
    let content: string = fs.readFileSync(fileName, charsetEncoding);
    let contentArray: string[] = content.split(',\t');
    console.log(contentArray);
    
    if () {
      
    }

    return 'marvel has made the most movies in 2017.';
    } catch (e) {
    console.log(e.message);
    return 'Cannot find studio, please try again later.'; 
  }
}

console.log(findMostProductiveYear('marvel'));

/********************************
 * Do not modify the code below *
 ********************************/
export default findMostProductiveYear;
