var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3060, function () {
  console.log('Sample app listening on localhost port 3060!');
});
