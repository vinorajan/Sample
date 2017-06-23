define([
    'Backbone',
    'text!widgets/pages/homePage/sideNav/sideNav.html',
    'widgets/pages/homePage/homePage.collection',
    'text!widgets/common/loader/loader.html',
    'widgets/common/newsFeed/newsFeed'
], function(
    Backbone,
    Template,
    HomePageCollection,
    LoaderTpl,
    NewsFeed
) {
    var SideNav = Backbone.View.extend({
        className: "sidenav col-xs-12 col-md-4 col-sm-4 col-lg-4",
        template: _.template(Template),
        initialize: function() {
            this.homeCollection = new HomePageCollection();
            this.homeCollection.getNewsFeed();
            this.listenTo(this.homeCollection, 'success', this.createNewsFeed.bind(this));
        },
        render: function() {
            var loader = _.template(LoaderTpl);
            this.$el.html(loader());
            return this;
        },
        createNewsFeed: function() {
            var self = this;
            this.$el.html(this.template());
            this.homeCollection.each(function(model) {
                self.$(".row").append(new NewsFeed({ model: model }).render().el);
            })
        }
    });

    return SideNav;
})
