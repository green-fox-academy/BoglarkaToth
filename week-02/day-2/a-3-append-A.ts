'use strict';
export{}

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

function appendA (list: string []): string[] {
    return list.map(function(input): string {
        return input + 'a';
        }
    )
}
console.log(appendA(far));
