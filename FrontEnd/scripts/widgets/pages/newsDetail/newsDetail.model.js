define([
	'Backbone',
],function(
		Backbone
){
	var NewsDetailModel = Backbone.Model.extend({
		urlRoot:"/api/v1/news",
		getNewsDetail:function(){
			var self = this;
			this.fetch({
	            reset: true,
	            success: function (model, response, options) {
	                self.trigger('success');
	            },
	            error: function (model, response, options) {
	                self.trigger('fail');
	            }
        	});
		}
	});

	return NewsDetailModel;
})