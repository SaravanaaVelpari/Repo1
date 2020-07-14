var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Oye Oye Suvetha, i am a genius too!');
});
app.listen(process.env.PORT, function () {
  console.log('Example app listening on heroku port!');
});


app.get('/:req', function (req, res) {
  res.send(req);
});
