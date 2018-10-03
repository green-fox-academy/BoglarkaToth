'use strict';
// azért kell külön .js, mert külön html-re=új oldalra ment a submit

window.onload = () => {

  // POST -------------------------------------------------------------------------------------
  const url = "http://localhost:8080/posts"; // serverről szedi az urlt a POSTból
  const inputTitle = document.querySelector('.input-title');
  const inputUrl = document.querySelector('.input-url');
  const inputButton = document.querySelector('button');

  function postData(url, callback) {
    let http = new XMLHttpRequest();
    http.open("POST", url);
    http.setRequestHeader('Accept', 'application/json');
    http.setRequestHeader("Content-Type", "application/json");
    http.onload = function () {
      if (this.status == 200) {
        callback()
        // CALLBACK-be mindig ennek az if-nek a cuccai kerülnek:
        // VAGY:
        // alert('Sikeres feltöltés')
        // // akkor dobjon vissza, ha megtötént a sikeres feltöltés
        // window.location.href = "/"   // = http://localhost:8080 
      }
    };
    if (inputTitle.value == '' && inputUrl.value == '') {
      alert('Ne hagyd üresen, bro!')
    } else {
      http.send(JSON.stringify({
        title: inputTitle.value,
        url: inputUrl.value
      }))
    };
  }
  function postDataCallback() {
    alert('Sikeres feltöltés')
    // akkor dobjon vissza, ha megtötént a sikeres feltöltés
    window.location.href = "/"   // = http://localhost:8080 
  }

  // itt küldi be a button/click a beírt adatot a POST endpointra.. = sumbit.html oldalon lévő gomb
  inputButton.addEventListener('click', () => {
    postData(url, postDataCallback);
  })
};
