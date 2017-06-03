define([
	'Backbone',
	'text!widgets/pages/contactPage/contactPage.html'
],function(
		Backbone,
		Template
){
	var HomeView = Backbone.View.extend({
		className:"contact-page-container",
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