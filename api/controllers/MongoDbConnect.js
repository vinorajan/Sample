var MongoClient = require('mongodb').MongoClient;
// Connection url
var url = 'mongodb://127.0.0.1:27017/vinoraj';

module.exports = function(callBack) {
    MongoClient.connect(url, callBack)
};
