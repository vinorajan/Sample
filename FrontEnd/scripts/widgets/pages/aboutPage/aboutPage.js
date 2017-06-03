define([
	'Backbone',
	'text!widgets/pages/aboutPage/aboutPage.html'
],function(
		Backbone,
		Template
){
	var HomeView = Backbone.View.extend({
		className:"about-page-container",
		template:_.template(Template),
		events:{
			
		},
		initialize:function(){
			
		},
		render:function(){
			this.$el.html(this.template());
			return this;
		}
	});

	return HomeView;
})