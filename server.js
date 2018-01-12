const express = require('express');
const app = express();
global.fetch = require('node-fetch');
const cc = require('cryptocompare');
app.set('view engine', 'ejs'); // setting view engine

app.listen(3000, function() {
  console.log('listening on 3000');
});

//   .get('/', (req, res) => {
//     // let list = 'hello';
//     const coinName = cc
//       .coinList()
//       .then(coinList => {
//         const coinPrice = cc
//           .priceMulti(['BTC', 'ETH', 'XRP'], 'USD')
//           .then(prices => {
//             // assigning result to coinlist
//             //  res.render('index.ejs', {
//             //    BTC: prices.BTC.USD
//           });
//       })
//       .catch(console.error);
//     res.render('index.ejs', {
//       test: coinList.Data.BTC.CoinName,
//       test2: coinList.Data.ETH.CoinName,
//       test3: coinList.Data.XRP.CoinName,
//       BTC: prices.BTC.USD
//     });
//   })
// })
//   .catch(console.error);

app.get('/', (req, res) => {
  cc.coinList().then(coinList => {
    let list = coinList;
    cc.priceMulti(['BTC', 'ETH', 'XRP'], 'USD').then(multiPrices => {
      let prices = multiPrices;
      res.render('index.ejs', {
        name1: list.Data.BTC.CoinName,
        name2: list.Data.ETH.CoinName,
        name3: list.Data.XRP.CoinName,
        price1: prices.BTC.USD,
        price2: prices.ETH.USD,
        price3: prices.XRP.USD
      });
    });
  });
});

// cc.price('BTC', ['USD']).then(prices => {
//   //console.log(prices);
//   // -> { USD: 1100.24, EUR: 1039.63 }
//   var BTCprice = prices;
//   res.render('index', { title: 'USD', message: 'Price is: ' });
//   console.log(BTCprice.USD);
