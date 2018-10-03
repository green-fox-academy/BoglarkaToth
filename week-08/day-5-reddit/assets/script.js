'use strict';

window.onload = () => {
  // (jegyzet => 7/2/api/1)
  let postButton = document.querySelector('.post');

  // GET -------------------------------------------------------------------------------------
  // callback-ben creatElement.... hozom létre s rakom a html-be a post-okat.
  // uitt.. a gombokra addE.L-t rakni, amikre a gomb PUT-jában adom a funkciót...
  let urlGet = "http://localhost:8080/posts";
  // hozz az adatot a serverről
  function getData(urlGet, callback) {
    let http = new XMLHttpRequest();
    http.open("GET", urlGet);
    http.onload = function () {
      if (this.status == 200) {
        let dataFromServer = JSON.parse(http.response); // = url + get => server .get-ből a result
        // console.log(dataFromServer.posts);
        callback(dataFromServer) // = getDataCallback(dataFromServer
      }
    };
    http.send();
  }
  // itt használom a fent(function getData() ) áthozott és változóba rakott adatot(let dataFromServer):
  function getDataCallback(dataFromServer) {
    let containerDiv = document.querySelector('.container'); // azért forE kívül, mert elég egyszer behívni

    dataFromServer.posts.forEach(element => {
      // console.log(element);
      let voteDiv = document.createElement('div');
      let buttonUp = document.createElement('button');
      let pScore = document.createElement('p');
      let buttonDown = document.createElement('button');
      let postDiv = document.createElement('div');
      let titleDiv = document.createElement('div');
      let titleA = document.createElement('a');
      let timestampDiv = document.createElement('div');
      let timestampP = document.createElement('p');
      let deletePost = document.createElement('button');
      let modifyPost = document.createElement('button');
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
      buttonUp.addEventListener('click', eventUpVote);
      buttonDown.addEventListener('click', eventDownVote);
      deletePost.addEventListener('click', eventDeletePost);

      // ez dob a modify oldalra = modify.html
      modifyPost.addEventListener('click', () => {
        localStorage.setItem('currentId', element.id); // eltároltuk az id-t -- modify.js-ben hasnálok
        localStorage.setItem('currentTitle', element.title); 
        localStorage.setItem('currentUrl', element.url); 
       
        window.location.href = `/modify?id=${element.id}`;
      })

    });
  }
  getData(urlGet, getDataCallback);



  // PUT up-------------------------------------------------------------------------------------
  function eventUpVote(event) {
    //az egész PUT req-et egy functionbe kell rakni, ami felmegy  GET .addEventListener-be a gombra
    //a PUT callback-je küldi fel a GET-be, hogy ... =>
    let urlUpVote = `http://localhost:8080/posts/${event.target.dataset.id}/upvote`; 
    function putData(urlUpVote, callback) {
      let http = new XMLHttpRequest();
      http.open("PUT", urlUpVote);
      http.onload = function () {
        if (this.status == 200) {
          let dataFromServer = JSON.parse(http.response);
          // ?? nincs használva a dataFr? alább a putD callback nem használja... ??
          // tulajdonképpen hol/hogy kapja meg a score értéket??
          callback(dataFromServer) // = putDataCallback()
        }
      };
      http.send();
    }
    // beadja közvetlenül az adatot(score-t) az oldlnak (nem kell frissíteni)
    // ... => az url-t ird át '/'-re = oda megy a kérés => utána találkozik a gettel => ami lekéri az adatokat:
    function putDataCallback(dataFromServer) {
      window.location.href = "/";
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
          let dataFromServer = JSON.parse(http.response);
          callback(dataFromServer) // = putDataCallback()
        }
      };
      http.send();
    }
    function putDataCallback(dataFromServer) {
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
          let dataFromServer = JSON.parse(http.response);
          callback(dataFromServer) // = deleteDataCallback()
        }
      };
      http.send();
    }
    function deleteDataCallback(dataFromServer) {
      window.location.href = "/";
    }
    deleteData(urlDeletePost, deleteDataCallback);
  }

  // ez dob a SUBMIT oldalra = submit.html
  postButton.addEventListener('click', () => {
    window.location.href = "assets/submit.html"
  })
};
