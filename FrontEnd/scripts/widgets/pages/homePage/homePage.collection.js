define([
	'Backbone',
	'Config'
],function(
		Backbone,
		Config
){
	var HomeView = Backbone.Model.extend({
		
	});


	var HomeCollection = Backbone.Collection.extend({ 	
		model:HomeView,
		url:Config.API_URL_V1()+"/news/home",
		getNewsFeed:function(){
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
	return HomeCollection;
})