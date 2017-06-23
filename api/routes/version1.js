'use strict';

var express = require('express'),
    Version1Router = express.Router();
var NewsController = require('../controllers/newsController');
Version1Router.use("/news", NewsController);

module.exports = Version1Router;
