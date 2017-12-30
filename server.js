const express = require('express');
const app = express();
global.fetch = require('node-fetch');
const cc = require('cryptocompare');

app.listen(3000, function() {
  console.log('listening on 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // cc
  //   .coinList()
  //   .then(coinList => {
  //     console.log(coinList[0]);
  //   })
  //   .catch(console.error);

  cc.price('BTC', ['USD']).then(prices => {
    //console.log(prices);
    // -> { USD: 1100.24, EUR: 1039.63 }
    var BTCprice = prices;
    console.log(BTCprice.USD);
  });
});
