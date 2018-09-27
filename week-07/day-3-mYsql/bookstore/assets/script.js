window.onload = () => {
// Konfiguráció=>
  const host = 'http://localhost:3000/api';
  const http = new XMLHttpRequest();
  const bookstore = document.querySelector('#book-names');
  http.open('GET', `${host}/booklist`, true);
  console.log(http);

  // ha megjött a válasz, akkor ennek kell történnie:
  http.onload = () => {

  }

}