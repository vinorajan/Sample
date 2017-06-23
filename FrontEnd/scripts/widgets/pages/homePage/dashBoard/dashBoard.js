define([
	'Backbone',
	'text!widgets/pages/homePage/dashBoard/dashBoard.html',
	'widgets/pages/homePage/homePage.collection',
	'text!widgets/common/loader/loader.html',
	'widgets/common/newsFeed/newsFeed'
],function(
		Backbone,
		Template,
		HomePageCollection,
		LoaderTpl,
		NewsFeed
){
	var Dashboard = Backbone.View.extend({
		className:"dashboard col-xs-12 col-sm-8 col-md-8 col-lg-8",
		template:_.template(Template),
		initialize:function(){
			this.homeCollection = new HomePageCollection();
			this.homeCollection.getNewsFeed();
			this.listenTo(this.homeCollection, 'success', this.createNewsFeed.bind(this));
		},
		render:function(){
			var loader = _.template(LoaderTpl);
			this.$el.html(loader());
			return this;
		},
		createNewsFeed:function(){
			var self = this;
			this.$el.html(this.template());
			this.homeCollection.each(function(model){
				self.$(".row").append(new NewsFeed({model:model}).render().el);
			})
		}
	});

	return Dashboard;
})