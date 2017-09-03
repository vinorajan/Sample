define([
	'Backbone',
	'text!widgets/pages/aboutPage/aboutPage.html',
	'widgets/pages/aboutPage/deviceList/deviceList',
	'widgets/pages/aboutPage/createDevice/createDevice',
	'widgets/pages/aboutPage/aboutPage.collection'
],function(
		Backbone,
		Template,
		Device,
		AddDevice,
		AboutCollection
){
	var HomeView = Backbone.View.extend({
		className:"about-page-container",
		template:_.template(Template),
		events:{
			
		},
		initialize:function(){
			this.aboutCollection = new AboutCollection();
		},
		render:function(){
			this.$el.html(this.template());
			this.createDeviceSection();
			this.createAddSection();
			return this;
		},
		createDeviceSection:function(){
			this.deviceList = new Device({collection:this.aboutCollection});
			this.$(".devicesection").html(this.deviceList.render().el);
		},
		createAddSection:function(){
			this.createSection = new AddDevice({collection:this.aboutCollection});
			this.$(".createsection").html(this.createSection.render().el);
		}
	});

	return HomeView;
})