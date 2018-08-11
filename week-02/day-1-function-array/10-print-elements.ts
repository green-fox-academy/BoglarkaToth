'use srtict'
export{}

// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array methods


// ez jó ?? 
let integers: numbe [] = [4, 5, 6, 7];
for (let i = 0 ; i < integers.length ; i++ ) {
}
console.log(integers);





function integers2 (...param: number []) {
  console.log (param);
}
integers2(4, 5, 6, 7);


// forEach : a változóban megadott paraméterek mindegyikén külön-külön végrehajtja az utána írt műveletet
// bármi lehet  ?? for is ?
let integers3 = [4, 5, 6, 7];
integers3.forEach(function (value: number) {
console.log(value);
});