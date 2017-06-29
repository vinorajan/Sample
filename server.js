var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    dbConnect = require("./api/controllers/DbConnect");


dbConnect();
app.use(express.static(__dirname + '/FrontEnd'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var routesV1 = require('./api/routes/version1');
app.use("/api/v1", routesV1);
app.use(function(err, req, res, next) {
    res.status(400).send(err.message)
})
app.listen(port);
console.log('NewsApp Rest Services Started at Port: ' + port);
