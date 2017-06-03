'use strict';
// Require Mongo Common method
var db = require('../controllers/MongoDbConnect');
var ObjectId = require('mongodb').ObjectId; 
exports.get_home_news_feed = function(req, res) {
  var callBack = function(err, db) {
    var searchParam = {}
      if(err) { 
           return console.dir(err);
      }
      
      var products = db.collection("products");
      if(req.params.id){
        if(ObjectId.isValid(req.params.id))
           searchParam._id = new ObjectId(req.params.id);
        else
           return res.send("Invalid Id");
        products.findOne(searchParam,function(err,doc){
          res.send(doc);
        });
      }else{
        products.find(searchParam).toArray(function(err,results){
        res.send(results);
      });
      }
  };
  db(callBack);
};
