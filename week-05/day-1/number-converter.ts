'use strict';

export function numberToString(myInput: any): any {
  const numbersTillThirteen: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numbersTillHundred: string[] = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let written: string;
  
  const lastDigit: string =' ' + numbersTillThirteen[myInput % 10];
  const secondBeforeLastDigit = numbersTillHundred[Math.floor((myInput / 10) % 10) - 2];
  const digitAtHundreds = numbersTillThirteen[Math.floor(myInput / 100) % 10] + ' hundred';
  const thousandDigits = numbersTillThirteen[Math.floor(myInput / 1000)] + ' thousand ';

  if (myInput <= 19) {
    written = numbersTillThirteen[myInput];
  } else if (myInput >= 20 && myInput < 100) {
    written = secondBeforeLastDigit + lastDigit;
  } else if (myInput >= 100 && myInput < 1000) {
    written = digitAtHundreds + ' and ' + secondBeforeLastDigit + lastDigit;
  } else if (myInput >= 1000 && myInput < 10000) {
    written = thousandDigits + digitAtHundreds + ' and ' + secondBeforeLastDigit + lastDigit;
  }
  return written;
};