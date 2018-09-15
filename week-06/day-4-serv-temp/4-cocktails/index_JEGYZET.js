'use strict';

const express = require('express');
const app = express();
const PORT = 3004;
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

const cocktailList = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

//endpoint=
app.get('/', (req, res) => {
  // ha csak / jel van az url-ben, akkor bejön ide:
  // ha a / után ?alcohol=gin van, akkor is bejön
  // viszont rossz url esetén nem jön (pl /akarmi/?alcohol=...)
  let alcoholType = req.query.alcohol; // jó url megadásához tartozik..
  // alcoholType = alcohols.ejs url-ből az "/?alcohol=" az elem-é fog kiértékelődni = ami az alcoholList-nek az elem-e
  // req.query = "?"" az url-ben
  // alcohol = a ? után jövő "alcohol=" az url-ben

  // => egvan a jó url-ünk =>

  if (alcoholType) {
    // ez az if fogja eldönteni, h volt-e pl "/?alcohol=gin"
    // vagy = else csak simán / volt
    let elemArr = [];
    // ez lesz a cocktailList az alcohol.ejs-ben a megtalált alkoholra = pl "/?alcohol=gin"
    cocktailList.forEach((elem) => {
      if (elem.contains.includes(alcoholType) == true) {
        // includes() igaz-hamis értéket ad attól függően, h benne van-e az, amit keresünk,
        //pl "/?alcohol=gin"-ből a gin = alcoholType
        elemArr.push(elem);
      }
    })
    res.render('alcohols', {      // alcohols.ejs-t hívja
      alcoholList,
      cocktailList: elemArr,
      // ez lesz a cocktailList az alcohol.ejs-ben a megtalált alkoholra = pl "/?alcohol=gin"
    });
  } else {
    // vagy = else csak simán / volt
    res.render('alcohols', {      // alcohols.ejs-t hívja
      alcoholList,
      cocktailList,
    });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});