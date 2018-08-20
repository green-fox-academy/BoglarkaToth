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
function whoHas (list1: any[]): string {
    let nameStudent: string = '';
    list1.forEach(function(elem1): void {
        if ( 4 < elem1.candies) {                         //  elem.candies = elem["candies"]
        nameStudent = nameStudent + elem1.name + ", ";                //  num += elem.name
        }
    });
    return nameStudent;
}
console.log(whoHas(students));

// create a function that takes a list of students and logs: 
//  - how many candies they have on average
function howMany ( list2: any[]): any{
    let newList: number = 0;
    list2.map(function(elem2): void {
        newList += elem2.candies / 5;
    })
    return newList
}
console.log(howMany(students));