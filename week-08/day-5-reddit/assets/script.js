'use strict';

window.onload = () => {
  // (jegyzet => 7/2/api/1)

  // GET -------------------------------------------------------------------------------------
  const urlGet = "http://localhost:8080/posts";

  // ez hozza az adatot a serverről:
  function getData(urlGet, callback) {      // VAGY: const getData = () => {}
    const http = new XMLHttpRequest();
    http.open("GET", urlGet);
    http.onload = function () {
      // CALLBACK-be mindig ennek az if-nek a cuccai kerülnek:
      if (this.status == 200) {
        const dataFromServer = JSON.parse(http.response); // = url + get => server.js .get-ből a result
        callback(dataFromServer) // = getDataCallback(dataFromServer)
      }
    };
    http.send();
  }
  // callback-ben creatElement.... hozom létre s rakom a html-be a post-okat.
  // uitt.. a gombokra addE.L-t rakni, amikre a gomb PUT-jában adom a funkciót...
  // itt használom a fent(function getData() ) áthozott és változóba rakott adatot(let dataFromServer):
  function getDataCallback(dataFromServer) {
    const containerDiv = document.querySelector('.container'); // azért forE kívül, mert elég egyszer behívni

    // .posts = server.js GET res.json {} key-e
    dataFromServer.posts.forEach(element => {
      // console.log(element);
      const voteDiv = document.createElement('div');
      const buttonUp = document.createElement('button');
      const pScore = document.createElement('p');
      const buttonDown = document.createElement('button');
      const postDiv = document.createElement('div');
      const titleDiv = document.createElement('div');
      const titleA = document.createElement('a');
      const timestampDiv = document.createElement('div');
      const timestampP = document.createElement('p');
      const deletePost = document.createElement('button');
      const modifyPost = document.createElement('button');
      containerDiv.appendChild(voteDiv);
      voteDiv.appendChild(buttonUp);
      voteDiv.appendChild(pScore);
      voteDiv.appendChild(buttonDown);
      containerDiv.appendChild(postDiv);
      postDiv.appendChild(titleDiv);
      titleDiv.appendChild(titleA);
      postDiv.appendChild(timestampDiv);
      timestampDiv.appendChild(timestampP);
      timestampDiv.appendChild(deletePost);
      timestampDiv.appendChild(modifyPost);
      containerDiv.className = 'body-div';
      voteDiv.className = 'vote';
      buttonUp.className = 'upvote';
      pScore.className = 'score';
      buttonDown.className = 'downvote';
      postDiv.className = 'post';
      titleDiv.className = 'title-div';
      titleA.className = 'title';
      timestampDiv.className = 'timestamp-div';
      timestampP.className = 'timastamp';
      deletePost.className = 'delete';
      modifyPost.className = 'modify';

      buttonUp.innerHTML = 'up'; // css-el a png
      buttonUp.dataset.id = element.id; // az endpoint is az id-t hívja
      pScore.innerHTML = element.score;
      buttonDown.innerHTML = 'down'; // css-el a png
      buttonDown.dataset.id = element.id; // az endpoint is az id-t hívja
      titleA.innerHTML = element.title;
      titleA.href = element.url;
      //modifyA.href = ??; // modify.html-t hoz majd be
      //deleteA.href = ??; // delete.html-t hoz majd be
      timestampP.innerHTML = element.timestamp;
      deletePost.innerHTML = 'delete';
      deletePost.dataset.id = element.id;// az endpoint is az id-t hívja
      modifyPost.innerHTML = 'modify';
      modifyPost.dataset.id = element.id;// az endpoint is az id-t hívja

      //gombokra eventet adni, amit(functiont) a saját put-jában írok meg
      // itt küldi be a button/click a beírt adatot a PUT endpointra.. = index.html oldalon lévő gomb
      buttonUp.addEventListener('click', eventUpVote); // eventUpVote = alább a PUT "http.req"-e
      buttonDown.addEventListener('click', eventDownVote);
      deletePost.addEventListener('click', eventDeletePost);
      modifyPost.addEventListener('click', () => {
        localStorage.setItem('currentId', element.id); // eltároltuk az id-t -> modify.js-ben használok
        localStorage.setItem('currentTitle', element.title);
        localStorage.setItem('currentUrl', element.url);
        // ez dob a modify oldalra = modify.html
        // ehhez kell a server.js-ben egy >> app.get('/modify' ...<<
        window.location.href = `/modify?id=${element.id}`;
      })

    });
  }
  getData(urlGet, getDataCallback);


  // PUT up-------------------------------------------------------------------------------------
  function eventUpVote(event) {
    //azért kell az egész PUT req-et egy functionbe kell rakni, amert az felmegy  GET .addEventListener-be a gombra
    let urlUpVote = `http://localhost:8080/posts/${event.target.dataset.id}/upvote`;
    function putData(urlUpVote, callback) {
      let http = new XMLHttpRequest();
      http.open("PUT", urlUpVote);
      http.onload = function () {
        if (this.status == 200) {
          callback() // = putDataCallback()
        }
      };
      http.send();
    }
    // itt írjuk felül az urlUpVote-ot "/"-re = index.html-t fogja visszaküldei,
    //ezáltal újragenerllódik az egész oldal a már friss score adatokkal (nem kell külön frissíteni):
    function putDataCallback() {
      window.location.href = "/";     // = http://localhost:8080 
    }
    putData(urlUpVote, putDataCallback);
  }

  // PUT down-------------------------------------------------------------------------------------
  function eventDownVote(event) {
    let urlDownVote = `http://localhost:8080/posts/${event.target.dataset.id}/downvote`;
    function putData(urlDownVote, callback) {
      let http = new XMLHttpRequest();
      http.open("PUT", urlDownVote);
      http.onload = function () {
        if (this.status == 200) {
          callback() // = putDataCallback()
        }
      };
      http.send();
    }
    function putDataCallback() {
      window.location.href = "/";
    }
    putData(urlDownVote, putDataCallback);
  }

  // DELETE-------------------------------------------------------------------------------------
  function eventDeletePost(event) {
    let urlDeletePost = `http://localhost:8080/posts/${event.target.dataset.id}`;
    function deleteData(urlDeletePost, callback) {
      let http = new XMLHttpRequest();
      http.open("DELETE", urlDeletePost);
      http.onload = function () {
        if (this.status == 200) {
          callback() // = putDataCallback()
        }
      };
      http.send();
    }
    function deleteDataCallback() {
      window.location.href = "/";
    }
    deleteData(urlDeletePost, deleteDataCallback);
  }

  // ez dob a SUBMIT oldalra = submit.html
  // az index.html-ben beégetet div-ben van, ezért itt hívom..
  let postButton = document.querySelector('.post');
  postButton.addEventListener('click', () => {
    window.location.href = "assets/submit.html"
  })
};
