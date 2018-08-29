'use strict';
export{}

// transferAmount function-öm nem működik _ miért ??

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

/*
let lookFor: number = 11234543;
function getNameAndBalance(accountL: any[]): any[] {
// map-pel:
  let nameAndNumber: any[] = []; // ez miért is kell? (a return-ön túl..)
  accounts.map(elem => {         // ha elé írom _nameAndNumber =_ uez az eredmény -> mindenképpen
    //                              erre vonatkozik?
    if ( elem.accountNumber === lookFor ) {
      console.log(elem.clientName, elem.balance);
    }
  });
  return nameAndNumber;

--------
// forEach-el:
  let nameAndNumber: any[] = [];
    accounts.forEach (function(elem) {
        if (elem.accountNumber == lookFor) {
            nameAndNumber.push(elem["clientName"],elem["balance"]);
        }
    });
    console.log(nameAndBalance);
--------

}
getNameAndBalance(accounts);
*/


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);


let fromAccountNumber: number = 43546731;
let toAccountNumber: number = 23456311;
let cashToTransfer: number = 500;
  
function transferAmount(accountL: any[]): void {
  let transfer: any[] = [];
  accounts.map(elem => {
    if ( elem.accountNumber !== fromAccountNumber && toAccountNumber ) {
      console.log('404 - account not found');
    } else if (elem.accountNumber === fromAccountNumber ) {
      elem.balance = elem.balance - cashToTransfer;
    } else {
      elem.balance = elem.balance + cashToTransfer;
    }
    console.log(elem.clientName, elem.balance);

})}
transferAmount(accounts);



//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]