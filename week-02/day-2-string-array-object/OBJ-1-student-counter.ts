'use strict';
export{}

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];


// create a function that takes a list of students and logs: 
// - how many candies are owned by students
function candyCount (list1) {
    let num1: number= 0;

    list1.forEach(function(elem1) {
    num1 = num1 + elem1.candies;
    });
    return num1;
}
console.log(candyCount(students));


// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies
function ageCount (list2) {
    let num2: number= 0;

    list2.forEach(function(elem2) {
        if (5>elem2.candies) {                         //  elem2.candies = elem2["candies"]
            num2 = num2 + elem2.age;                     //  num += elem2.age
        }
    });
    return num2;
}

console.log(ageCount(students));




//   console.log (students[1].age);  