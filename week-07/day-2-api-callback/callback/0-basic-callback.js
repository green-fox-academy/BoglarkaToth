'use strict'

const fuggveny = (callback) => {
  callback('hello')
}

const printer = (string) => {
  console.log(string)
}

printer('hi');
// hi
fuggveny(printer);
// hello
