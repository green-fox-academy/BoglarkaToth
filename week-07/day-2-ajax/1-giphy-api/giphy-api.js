window.onload = () => {
  // 
  let response = [];
  const host = 'https://api.giphy.com/v1/gifs/search?api_key=Wvo42F4eLy0BEZRUWCYAHCV1KpKqGrd4&q=cat&limit=16&offset=0&rating=G&lang=en';
  // kapcsolatot nyit a host-tal
  fetch(host)
    // resp=válasz, resp-ből json
    .then((resp) => (resp.json()))
    // a válasz ebben a  response objektumban lesz benne:
    // response = sanyi ... miért?
    .then(sanyi => {
      console.log(sanyi);
      let images = document.querySelector('.images');
      // images.innerHTML = sanyi.data[6].url; =>
      array.forEach(element => {
        
      });
    });
  // példányostíom a html-ben lévő div-et:
  console.log(response)

}