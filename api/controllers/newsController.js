'use strict';
 
  var express = require('express'),
  NewsRouter = express.Router();
  var todoList = require('../views/newsView');
  NewsRouter.get('/home',todoList.get_home_news_feed);
  NewsRouter.get('/:id',todoList.get_home_news_feed);

module.exports = NewsRouter;