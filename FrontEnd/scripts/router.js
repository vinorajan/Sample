define([
	'Backbone',
	'widgets/pages/homePage/homePage',
	'widgets/pages/contactPage/contactPage',
	'widgets/pages/aboutPage/aboutPage',
	'widgets/header/header',
	'widgets/footer/footer',
	'widgets/pages/newsDetail/newsDetail'

],function(
	Backbone,
	HomePage,
	ContactPage,
	AboutPage,
	HeaderView,
	FooterView,
	NewsDetail
){
	var AppRoute = Backbone.Router.extend({
		routes:{
			"":"homePage",
			"contact":"contactPage",
			"about":"aboutPage",
			"newsdetail/:newsid":"newsDetail"
		}
	});

	var headerView = new HeaderView();
	$("#header-container").html(headerView.render().el);

	var footerView = new FooterView();
	$("#footer-container").html(footerView.render().el);

	var appRoute = new AppRoute();

	appRoute.on("route:homePage",function(){
		var homePage = new HomePage()
		$("#parent-container").html(homePage.render().el);
	});

	appRoute.on("route:contactPage",function(){
		var contactPage = new ContactPage()
		$("#parent-container").html(contactPage.render().el);
	});

	appRoute.on("route:aboutPage",function(){
		var aboutPage = new AboutPage()
		$("#parent-container").html(aboutPage.render().el);
	});

	appRoute.on("route:newsDetail",function(newsId){
		var newsDetail = new NewsDetail({id:newsId})
		$("#parent-container").html(newsDetail.render().el);
	});
	
	Backbone.history.start();
})