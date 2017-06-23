define([
	'Backbone',
	'text!widgets/header/header.html'
],function(
		Backbone,
		Template
){
	var HeaderView = Backbone.View.extend({
		tagName:"nav",
		className:"navbar navbar-default",
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

	return HeaderView;
})