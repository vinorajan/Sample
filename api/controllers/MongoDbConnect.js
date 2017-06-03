var MongoClient = require('mongodb').MongoClient;
// Connection url
var url = 'mongodb://localhost:27017/vinoraj';

module.exports = function(callBack){
	MongoClient.connect(url,callBack);
}