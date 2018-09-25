document.addEventListener('DOMContentLoaded', function˙(){

  const list = document.querySelector('#book-list ul');

  // delete books
  list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  })

  // add books
  const addForm = document.forms['add-book'];
  addForm.addEventListener('submit', function (e) {
    e.prevetnDefault();
    const value = addForm.querySelector('unput[type="text"]').value;
  })

  // create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');



})
