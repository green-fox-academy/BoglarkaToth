'use strict';
// azért kell külön .js, mert külön html-re=új oldalra ment a submit

window.onload = () => {

  // POST -------------------------------------------------------------------------------------

  let url = "http://localhost:8080/posts"; // serverről szedi az urlt a POSTból
  let inputTitle = document.querySelector('.input-title');
  let inputUrl = document.querySelector('.input-url');
  let inputButton = document.querySelector('button');

  function postData(url, callback) {
    let http = new XMLHttpRequest();
    http.open("POST", url);
    http.setRequestHeader('Accept', 'application/json');
    http.setRequestHeader("Content-Type", "application/json");
    http.onload = function () {
      if (this.status == 200) {
        let dataFromServer = JSON.parse(http.response);
        // console.log(dataFromServer);
      }
    };
    http.send(JSON.stringify({
      title: inputTitle.value,
      url: inputUrl.value
    })
    );
  }
  function postDataCallback(dataFromServer) {
    // // ??? ez itt mi ?? 
    // dataFromServer.posts.forEach(element => {
    //   console.log(element);
    // });
  }

  // itt küldi be a button/click a beírt adatot a POST endpointra.. = sumbit.html oldalon lévő gomb
  inputButton.addEventListener('click', () => {
    postData(url, postDataCallback);
    window.location.href = "http://localhost:8080"

  })
};
