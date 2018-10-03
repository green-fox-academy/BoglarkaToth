'use strict';

window.onload = () => {

  // MODIFY ------------------------------------------------------------------------------------

  const currentId = localStorage.getItem('currentId'); // = a scrip.js-ben elmentett id
  const currentTitle = localStorage.getItem('currentTitle');
  const currentUrl = localStorage.getItem('currentUrl');

  const url = `http://localhost:8080/posts/${currentId}` // serverről szedi az urlt a PUTból
  const inputTitle = document.querySelector('.input-title');
  const inputUrl = document.querySelector('.input-url');
  const modifyButton = document.querySelector('.data-send'); // script.jsbe van beírva, h midnnehol legyen... akkor is hívhatom így?

  inputTitle.value = currentTitle;
  inputUrl.value = currentUrl;

  function modifyData(url, callback) {
    let http = new XMLHttpRequest();
    http.open("PUT", url);
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
  function modifyDataCallback(dataFromServer) {
    // // ??? ez itt mi ?? 
    // dataFromServer.posts.forEach(element => {
    //   console.log(element);
    // });
  }

  // itt küldi be a button/click a beírt adatot a PUT endpointra.. = modify.html oldalon lévő gomb
  modifyButton.addEventListener('click', () => {
    modifyData(url, modifyDataCallback);
    window.location.href = "http://localhost:8080"
  })
};
