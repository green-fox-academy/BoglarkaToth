'use strict';
export{}

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function nameWho (list1): string {
    let nam: string;

    list1.forEach(function(elem1) {
        if (4<elem1.candies) {                         //  elem.candies = elem["candies"]
            nam = nam + ", " + elem1.name;                     //  num += elem.name
        }
    });
    return nam;
}

console.log(nameWho(students));
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

let newLength: number = students.push(4);