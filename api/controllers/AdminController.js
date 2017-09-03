'use strict';

var express = require('express'),
    AdminRouter = express.Router(),
    AuthController = require('../authentication/authController');


AdminRouter.use(function(req,res,next){
	var token = req.headers['token'];
	AuthController.validateToken(token,res,next);
});
AdminRouter.get('/', function(req,res){
	res.json({
		status:"success"
	})
});
AdminRouter.put('/:id', function(req,res){
	res.json({
		status:"success"
	})
});


module.exports = AdminRouter;