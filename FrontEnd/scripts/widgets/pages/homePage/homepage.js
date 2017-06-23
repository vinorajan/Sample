define([
    'Backbone',
    'text!widgets/pages/homePage/homePage.html',
    'widgets/pages/homePage/dashBoard/dashBoard',
    'widgets/pages/homePage/sideNav/sideNav'
], function(
    Backbone,
    Template,
    DashBoard,
    SideNav
) {
    var HomeView = Backbone.View.extend({
        className: "container",
        template: _.template(Template),
        initialize: function() {
            this.dashBoard = new DashBoard();
            this.sideNav = new SideNav();
        },
        render: function() {
            this.$el.html(this.template());
            this.renderDashboard();
            this.renderSideNav();
            return this
        },
        renderDashboard: function() {
            this.$el.append(this.dashBoard.render().el);
        },
        renderSideNav: function() {
            this.$el.append(this.sideNav.render().el);
        }
    });

    return HomeView;
})
