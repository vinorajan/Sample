'use strict';

var express = require('express'),
    AboutRouter = express.Router();
var todoList = require('../views/newsView');
AboutRouter.get('/', todoList.get_about_page);
AboutRouter.post('/', todoList.save_about_page);
AboutRouter.put('/:id', todoList.update_about_page);
module.exports = AboutRouter;