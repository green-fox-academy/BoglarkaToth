// akkor indul el window.onload-on belüli parancs, ha az egész weboldal sikeresen betöltődött
window.onload = () => {
  // host = ez az az endpoint, ami rákapcsolódik az adatbázisra, innen veszi az adatokat :
  const host = 'https://api.giphy.com/v1/gifs/search?api_key=Wvo42F4eLy0BEZRUWCYAHCV1KpKqGrd4&q=cat&limit=16&offset=0&rating=G&lang=en';

  // ------------ FETCH:
  // kapcsolatot nyit a host-tal = fetch(host)
  fetch(host)
    // .then = amikor a fetch kapcsolatot nyitott, csinálj vmit
    // resp = a host-ból az adat( = data{} )
    // (resp.json()) = a resp adatból MINDIG json formátumot kell csinálni
    .then((resp) => (resp.json()))
    // a válasz(=json formátum) ebben a response egy {}-ban lesz benne:
    // resp.json = sanyi
    .then(sanyi => {
      sanyi.data.forEach(elem => {
        let newImages = document.querySelector('.images');
        let newImg = document.createElement('img')
        newImg.src = elem.images['480w_still'].url;
        // ha click-elek, akkor .src már nem a ..480w_still'].url jpg-vel lesz egyenló
        // hanem a ..downsized'].url gif-fel:
        newImg.onclick = function () { newImg.src = elem.images['downsized'].url };
        newImages.appendChild(newImg);
      })
    });

  // fetch(host)
  //   .then((response) => {
  //     return 'hello'
  //   })
  //   .then((hello) => {
  //     return 'maki'
  //   })
  //   .then((maki) => {
  //     console.log(maki)
  //   });
  // // =
  // fetch(host)
  //   .then((response) => ('hello'))
  //   .then((hello) => ('maki'))
  //   .then((maki) => { console.log(maki) });
  // //=
  // fetch(host)
  //   .then((response) => ('hello'))            // response = data ! mindig data ....
  //   .then((response) => ('maki'))             // response = hello
  //   .then((response) => { console.log(maki) }); // response = maki


  // ------------ HTTP:
  const http = new XMLHttpRequest();
  // http.open  = server.jd "app."
  // ("GET"     = server.js ".get"
  // host (vagy url) )      = server.js "/-valami-"
  // true       = szinkorn v aszinkron ( nem muszáj kiírni, alapértelmezetten true)
  http.open('GET', host, true);
  http.onload = () => {
    // az if kezeli az adatot.. - egy callback függvény kezeli, h mi történjen az adatal ... 
    // ha callback függvényt hazsnálok, akkor az if-et is függvénybe kell rakni, 
    // mert így tudom meghívni az "adat (if)" függvényre a callback függvényt (alább PÉLDA)
    if (http.status === 200) { // = ha az adat visszajött..
      // .. akkor kezdjünk vele vmit:
      // (JSNO.parse()) = a resp adatból MINDIG json formátumot kell csinálni
      const sanyi = JSON.parse(http.response);
      // ez akár lehet ne egy callback függvény (alább külön van szedve a callback függvény)
      sanyi.data.forEach(elem => {
        let newImages = document.querySelector('.images');
        let newImg = document.createElement('img')
        newImg.src = elem.images['480w_still'].url;
        newImg.onclick = function () { newImg.src = elem.images['downsized'].url };
        newImages.appendChild(newImg);
      })
    }
  }
  http.send();
}


// PÉLDA- "adat (if)" függvény + callback függvény:
// "adat(if)" függvény:
function getData(url, callback) {
  let http = new XMLHttpRequest();
  http.open("GET", url);
  http.onload = function () {
    if (this.status == 200) {
      let dataFormServer = JSON.parse(this.data)
      callback(dataFormServer);
    }
  };
  http.send();
}
// callback függvény:
function imTheCallback(data) {
  data.forEach(element => {
    console.log(element)
  });
}
// server.js endpoint-ja:
let url = "http://localhost:3000/communication";
// itt hívom az adat-ra a callback-et:
getData(url, imTheCallback);