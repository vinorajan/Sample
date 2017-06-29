'use strict';
// Require Mongo Common method
var ObjectId = require('mongodb').ObjectId;
var NewsModel = require("../models/newsModel");
var fs = require('fs');


exports.get_home_news_feed = function(req, res) {
    var searchParam = {}
    if (req.params.id) {
        if (ObjectId.isValid(req.params.id))
            searchParam._id = new ObjectId(req.params.id);
        else
            return res.send("Invalid Id");
        NewsModel.findOne(searchParam, function(err, news) {
            res.json(news);
        })

    } else {
        NewsModel.find(searchParam, function(err, news) {
            res.json(news);
        })
    }
};

exports.save_news_feed = function(req, res, next) {
    if (req.body.file) {
        var path = "FrontEnd/uploads/";
        var timestamp = Date.now();
        var extension = ".jpeg";
        var UIPath = "/uploads/" + timestamp + extension;
        var base64Data = req.body.file.replace(/^data:image\/jpeg;base64,/, "");
        fs.writeFile(path + timestamp + extension, base64Data, 'base64', function(err) {
            if (err)
                res.send(err);
            req.body.filePath = UIPath;
            SaveNews()
        });
    } else {
        SaveNews()
    }

    function SaveNews() {
        var newModel = new NewsModel(req.body);
        newModel.save().then(function(news) {
            res.json(news)
        }).catch(next)
    }
};
