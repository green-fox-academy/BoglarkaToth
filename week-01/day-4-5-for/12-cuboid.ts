'use strict';
export {}

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:

// Surface Area: 600     
// Volume: 1000

// ha FIX számokkal dolgozom 
// változó bent is lehet                       MIÉRT ?
let sideA: number= 10;    
let sideB: number= 20;      
let sideC: number= 30;
function cuboidSurfaceArea1 () {  
    let result1: number= 2 * (sideA * sideB + sideA * sideC + sideB * sideC);
    return result1;     
}
console.log(cuboidSurfaceArea1());

//  ----------------------------

// ha többször használom a függvényt
function cuboidSurfaceArea3 () {  
    let result2: number= sideA * sideB * sideC;
    return result2;
}
console.log(cuboidSurfaceArea3());


/*
function cuboidSurfaceArea (sideA: number, sideB: number, sideC: number) {  
    
    let result1: number= 2 * (sideA * sideB + sideA * sideC + sideB * sideC);
    return result1;
     
}
console.log(cuboidSurfaceArea(10, 20, 30));

// ha több téglám van... ha mások is kell a függvény
*/