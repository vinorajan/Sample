define([
	'Backbone',
	'Config',
	'widgets/pages/aboutPage/aboutPage.model'
],function(
		Backbone,
		Config,
		AboutModel
){
	var AboutCollection = Backbone.Collection.extend({ 	
		model:AboutModel,
		url:Config.API_URL_V1()+"/about",
		getAbout:function(){
			  var self = this;
			this.fetch({
	            reset: true,
	            success: function (collection, response, options) {
	                self.trigger('success');
	            },
	            error: function (collection, response, options) {
	                self.trigger('fail');
	            }
        	});
		}
	});
	return AboutCollection;
})