// []-be elemek
let titles = document.getElementsByClassName('title');
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
Array.from(titles).forEach(item => {
  console.log(item);
})


// querySelector
const wmf = document.querySelector('#book-list li:nth-child(2).name');
console.log(wmf)

let books = document.querySelector('#book-list li.name');
console.log(books);

books = document.querySelector('#book-list li.name');
console.log(books)

Array.from(books).forEach(book => {
  console.log(book);
})


// changing TEXT  &  HTML content
let books = document.querySelector('#book-list li.name');

Array.from(books).forEach(book => {
  book.textContent += '(book title)';
})

const bookList = document.querySelector('#book-list');
bookList.innerHTML += '<p>This is how you add HTML</p>';



const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (elem) => {
  if (elem.target.className == 'delete') {
    const li = elem.target.parentElemenet;
    list.removeChild(li);
  }
});

// add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (elem) => {
  elem.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});