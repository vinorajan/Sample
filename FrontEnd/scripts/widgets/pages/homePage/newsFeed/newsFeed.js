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
		events:{
			
		},
		initialize:function(){
		
		},
		render:function(){
			this.$el.html(this.template());
			this.$("a").text(this.model.get("name"))
			return this;
		}
	});

	return NewsFeed;
})