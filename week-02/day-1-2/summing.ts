'use strict'

let maxNumber: number= 10;

function sum (until: number){
    let summarize: number = 0;
    for (let i: number = 0; i <= until; i++) {
    summarize = summarize + i;
    }
    return summarize;
}
console.log(sum(maxNumber));


// akkor kell, ha a 10et/számot/változót akarom változtatni,
// ha maga a funkció logikája a lényeg, de más adatokkal akarom használni

/*
function sum (){
    let megadottszam: number=10;
    let summarize: number = 0;
    for (let i: number = 0; i <= megadottszam; i++) {
  
        summarize = summarize+i;
    }
    return summarize;
}
console.log(sum());
// akkor kell, ha egy megadott számmal használt funkcióra
//van szükségem később
*/




// -  Write a function called `sum` that sum all the numbers until
//the given parameter
// -  The function should return the result