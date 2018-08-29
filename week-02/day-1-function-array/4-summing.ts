'use strict'
export{}
// (hasonló 1/4-5/12-cuboid)

// -  Write a function called `sum` that sum all the numbers until
//the given parameter
// -  The function should return the result

//?? funkció a feladat, de meg lehet így is oldani?

let sum3: number [] = [1, 2, 3, 4, 5];
sum3.forEach(function summa(){
    console.log(summa);
})

// -------------------------------------------

// ha FIX számmal használom
// változók KINT is lehetnek
// --- akkor lehet kint, ha arra a számra még szüksége van
// --- ha nincs rá szükségem később, akkor bent van, nem hívhatom/használhatom később
// function + console 2. ZÁRÓJELE üres     mert az egész funkciót hívom meg
// ( ezért kell a kövben a ()be írni a változót, mert azt változtatom )
function sum1 (){
    let maxNumber1: number=10;
    let summarize1: number = 0;
    for (let i: number = 0; i <= maxNumber1; i++) {
        summarize1 = summarize1+i;
    }
    return summarize1;
}
console.log(sum1());

// -------------------------------------------

// ha a változót akarom VÁLTOZTATOM, MÁS adatokkal is akarom használni
// itt a változó NEM LEHET BELÜL !!   hiszen, azt hívom meg a consolban 
// --- illetve ezt a számot később is használom (hiszen nem a funkcióban van)

let maxNumber2: number= 10;
function sum2 (until: number){
    let summarize2: number = 0; //ez mindegy hol van (mint az első példában), mert ez a művelethez kell
    for (let i: number = 0; i <= until; i++) {
        summarize2 = summarize2 + i;
    }
    return summarize2;
}
console.log(sum2(maxNumber2));
