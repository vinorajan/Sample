var jwt = require("jsonwebtoken");
var secretKey = require("../secret/apiKey");


var authentication = {
	authenticate:function(req,res){
		var userObj = {
			name:"vino",
			email:"vinorajan92@gmail.com"
		}
		var token = jwt.sign(userObj,secretKey,{
			expiresIn:60
		});
		res.json({
			success:true,
			token:token
		})
	},
	validateToken:function(token,res,next){
		jwt.verify(token,secretKey,function(err,decode){
			if(err)
				res.status(401).send("Not authorized");
			else
				next();
		});
	}

}
module.exports = authentication