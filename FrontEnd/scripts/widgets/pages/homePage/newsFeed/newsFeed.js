define([
	'Backbone',
	'text!widgets/pages/homePage/newsFeed/newsFeed.html'
	
],function(
		Backbone,
		Template
		
){

	var NewsFeed = Backbone.View.extend({
		className:"news-item",
		template:_.template(Template),
		initialize:function(){
		
		},
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return NewsFeed;
})