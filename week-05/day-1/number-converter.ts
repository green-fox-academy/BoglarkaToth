'use strict';

export function numberToString(myNumber: number): string {
  const numbersTillThirteen: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numbersTillHundred: string[] = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let writtenAmount: string;
  
  const lastDigit: string =' ' + numbersTillThirteen[myNumber % 10];
  const secondBeforeLastDigit = numbersTillHundred[Math.floor((myNumber / 10) % 10) - 2];
  const digitAtHundreds = numbersTillThirteen[Math.floor(myNumber / 100) % 10] + ' hundred';
  const thousandDigits = numbersTillThirteen[Math.floor(myNumber / 1000)] + ' thousand ';

  if (myNumber <= 19) {
    writtenAmount = numbersTillThirteen[myNumber];
  } else if (myNumber >= 20 && myNumber < 100) {
    writtenAmount = secondBeforeLastDigit + lastDigit;
  } else if (myNumber >= 100 && myNumber < 1000) {
    writtenAmount = digitAtHundreds + ' and ' + secondBeforeLastDigit + lastDigit;
  } else if (myNumber >= 1000 && myNumber < 10000) {
    writtenAmount = thousandDigits + digitAtHundreds + ' and ' + secondBeforeLastDigit + lastDigit;
  }
  return writtenAmount;
};