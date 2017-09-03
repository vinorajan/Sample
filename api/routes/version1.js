'use strict';

var express = require('express'),
	Version1Router = express.Router(),	
	AuthController = require('../authentication/authController'),	
	NewsController = require('../controllers/newsController'),
	AboutController = require('../controllers/aboutController'),
	AdminController = require('../controllers/adminController');

Version1Router.get("/authenticate", AuthController.authenticate);
Version1Router.use("/news", NewsController);
Version1Router.use("/about", AboutController);
Version1Router.use("/admin", AdminController);

module.exports = Version1Router;
