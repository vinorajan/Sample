var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(express.static(__dirname + '/FrontEnd'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

var routesV1 = require('./api/routes/version1');
app.use("/api/v1",routesV1);
app.listen(port);
console.log('NewsApp Rest Services Started at Port: ' + port);