define([
	'Backbone',
	'text!widgets/pages/newsDetail/newsDetail.html',
	'widgets/pages/newsDetail/newsDetail.model'
],function(
		Backbone,
		Template,
		NewsDetail
){
	var NewsDetailView = Backbone.View.extend({
		className:"news-detail",
		template:_.template(Template),
		events:{
			
		},
		initialize:function(newsId){
			this.newsDetail = new NewsDetail({id:newsId.id});
			this.newsDetail.getNewsDetail();
			this.listenTo(this.newsDetail,"success",this.render.bind(this))
		},
		render:function(){
			this.$el.html(this.template());
			return this;
		}
	});

	return NewsDetailView;
})