define([
    'Backbone',
    'text!widgets/pages/newsDetail/newsDetail.html',
    'widgets/pages/newsDetail/newsDetail.model',
    'text!widgets/common/loader/loader.html'
], function(
    Backbone,
    Template,
    NewsDetailModel,
    LoaderTpl
) {
    var NewsDetailView = Backbone.View.extend({
        className: "news-detail",
        template: _.template(Template),
        initialize: function(newsId) {
            this.newsDetailModel = new NewsDetailModel({ id: newsId.id });
            this.newsDetailModel.getNewsDetail();
            this.listenTo(this.newsDetailModel, "success", this.renderNewsDetail.bind(this))
        },
        render: function() {
            var loader = _.template(LoaderTpl);
            this.$el.html(loader());
            return this;
        },
        renderNewsDetail: function() {
            this.$el.html(this.template(this.newsDetailModel.toJSON()));
        }
    });

    return NewsDetailView;
})
