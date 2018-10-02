'use strict';

window.onload = () => {
  // (jegyzet => 7/2/api/1)
  let url = "http://localhost:8080/posts";

  // mit csinál??

  function getData(url, callback) {
    let http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = function () {
      if (this.status == 200) {
        let dataFromServer = JSON.parse(http.response); // = url + get => server .get-ből a result
        console.log(dataFromServer.posts);
        callback(dataFromServer)
      }
    };
    http.send();
  }

  // mit csinál??
  function getDataCallback(dataFromServer) {

    dataFromServer.posts.forEach(element => {

      let body = document.querySelector('body')
      let containerDiv = document.querySelector('.container');
      let voteDiv = document.createElement('div');
      let buttonUp = document.createElement('button');
      let pScore = document.createElement('p');
      let buttonDown = document.createElement('button');
      let postDiv = document.createElement('div');
      let titleDiv = document.createElement('div');
      let titleA = document.createElement('a');
      let timestampDiv = document.createElement('div');
      let modifyA = document.createElement('a');
      let deleteA = document.createElement('a');
      let timestampP = document.createElement('p');
      body.appendChild(containerDiv);
      containerDiv.appendChild(voteDiv);
      voteDiv.appendChild(buttonUp);
      voteDiv.appendChild(pScore);
      voteDiv.appendChild(buttonDown);
      containerDiv.appendChild(postDiv);
      postDiv.appendChild(titleDiv);
      titleDiv.appendChild(titleA);
      postDiv.appendChild(timestampDiv);
      timestampDiv.appendChild(modifyA);
      timestampDiv.appendChild(deleteA);
      timestampDiv.appendChild(timestampP);

      // body.className = ''; ???
      containerDiv.className = 'body-div';
      voteDiv.className = 'vote';
      buttonUp.className = 'upvote';
      pScore.className = 'score';
      buttonDown.className = 'downvote';
      postDiv.className = 'post';
      titleDiv.className = 'title-div';
      titleA.className = 'title';
      timestampDiv.className = 'timestamp-div';
      modifyA.className = 'modify';
      deleteA.className = 'delete';
      timestampP.className = 'timastamp';

      // buttonUp.href = ??,
      pScore.innerHTML = dataFromServer.posts[element].score;
      // buttonDown.href = ??;
      titleA.innerHTML = dataFromServer.posts[element].title,
        titleA.href = dataFromServer.posts[element].url;
      // modifyA.href = ??;
      // deleteA.href = ??;
      console.log(dataFromServer.posts[element].url);
      timestampP.innerHTML = dataFromServer.posts[element].timestamp;

    });

  }

  getData(url, getDataCallback);
};
