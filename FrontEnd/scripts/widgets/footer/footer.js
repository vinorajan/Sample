define([
	'Backbone',
	'text!widgets/footer/footer.html'
],function(
		Backbone,
		Template
){
	var HomeView = Backbone.View.extend({
		className:"footer-container",
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