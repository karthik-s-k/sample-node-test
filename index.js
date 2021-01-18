var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3050, function () {
  console.log('Sample app listening on port 3050!');
});