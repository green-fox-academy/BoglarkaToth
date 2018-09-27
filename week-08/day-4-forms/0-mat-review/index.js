'use strict';

window.onload = () => {
  const form = document.querySelector('#formHandler');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { name, age, fagyi } = event.target.elements;
    let options = document.querySelectorAll('option');
    let selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value)
      }
    }
    const toFill = document.querySelector('#response');
    const body = { name: name.value, age: age.value, gender: selected, fagyi: fagyi.value };
    const url = 'http://localhost:3000/api/postElements';
    fetch(url, {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body)
    }).then((res) => res.json())
      .then(res => {
        toFill.innerHTML += `sent: ${JSON.stringify(res)}`;
      })
  })
};

/*
fetch(url)
      .then((resp) => (resp.json()))
      .then(response => {
        console.log(response);
      });
*/
