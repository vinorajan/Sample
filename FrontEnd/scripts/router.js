define([
    'Backbone',
    'widgets/pages/homePage/homePage',
    'widgets/pages/contactPage/contactPage',
    'widgets/pages/aboutPage/aboutPage',
    'widgets/header/header',
    'widgets/footer/footer',
    'widgets/pages/newsDetail/newsDetail',
    'widgets/pages/login/login',
    'widgets/pages/admin/admin'

], function(
    Backbone,
    HomePage,
    ContactPage,
    AboutPage,
    HeaderView,
    FooterView,
    NewsDetail,
    LoginPage,
    AdminPage
) {
    var AppRoute = Backbone.Router.extend({
        routes: {
            "": "homePage",
            "contact": "contactPage",
            "about": "aboutPage",
            "newsdetail/:newsid": "newsDetail",
            "login": "loginPage",
            "admin": "adminPage"
        }
    });

    var headerView = new HeaderView();
    $("#header-container").html(headerView.render().el);

    var footerView = new FooterView();
    $("#footer-container").html(footerView.render().el);

    var appRoute = new AppRoute();

    appRoute.on("route:homePage", function() {
        var homePage = new HomePage()
        $("#parent-container").html(homePage.render().el);
    });

    appRoute.on("route:contactPage", function() {
        var contactPage = new ContactPage()
        $("#parent-container").html(contactPage.render().el);
    });

    appRoute.on("route:aboutPage", function() {
        var aboutPage = new AboutPage()
        $("#parent-container").html(aboutPage.render().el);
    });

    appRoute.on("route:newsDetail", function(newsId) {
        var newsDetail = new NewsDetail({ id: newsId })
        $("#parent-container").html(newsDetail.render().el);
    });

    appRoute.on("route:loginPage", function() {
        var loginPage = new LoginPage()
        $("#parent-container").html(loginPage.render().el);
    });

    appRoute.on("route:adminPage", function() {
        var adminPage = new AdminPage()
        $("#parent-container").html(adminPage.render().el);
    });

    Backbone.history.start();
})
