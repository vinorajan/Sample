define([
	'Backbone',
	'text!widgets/common/newsFeed/newsFeed.html'
],function(
		Backbone,
		Template
){
	var NewsFeed = Backbone.View.extend({
		className:"news-feed",
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