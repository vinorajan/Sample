define([
	'Backbone',
	'text!widgets/pages/homePage/homePage.html',
	'widgets/pages/homePage/homePage.collection',
	'widgets/pages/homePage/newsFeed/newsFeed'
],function(
		Backbone,
		Template,
		HomePageCollection,
		NewsFeed
){
	var HomeView = Backbone.View.extend({
		className:"news-container",
		template:_.template(Template),
		events:{
			"click .button1":"saveToDB"
		},
		initialize:function(){
			this.homeCollection = new HomePageCollection();
			this.homeCollection.getNewsFeed();
			this.listenTo(this.homeCollection, 'success', this.createNewsFeed.bind(this));
		},
		render:function(){
			this.$el.html(this.template());
			return this;
		},
		createNewsFeed:function(){
			var self = this;
			this.homeCollection.each(function(model){
				self.$(".main-news").append(new NewsFeed({model:model}).render().el);
			})
		},
		saveToDB:function(){
			this.model.save();	
		}
	});

	return HomeView;
})