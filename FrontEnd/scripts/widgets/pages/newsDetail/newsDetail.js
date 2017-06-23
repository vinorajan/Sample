define([
	'Backbone',
	'text!widgets/pages/newsDetail/newsDetail.html',
	'widgets/pages/newsDetail/newsDetail.model'
],function(
		Backbone,
		Template,
		NewsDetailModel
){
	var NewsDetailView = Backbone.View.extend({
		className:"news-detail",
		template:_.template(Template),
		events:{
			
		},
		initialize:function(newsId){
			this.newsDetailModel = new NewsDetailModel({id:newsId.id});
			this.newsDetailModel.getNewsDetail();
			this.listenTo(this.newsDetailModel,"success",this.renderNewsDetail.bind(this))
		},
		render:function(){
			return this;
		},
		renderNewsDetail:function(){
			this.$el.html(this.template(this.newsDetailModel.toJSON()));
		}
	});

	return NewsDetailView;
})