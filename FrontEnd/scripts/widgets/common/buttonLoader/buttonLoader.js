define([
    'Backbone',
    'text!widgets/common/buttonLoader/buttonLoader.html'
], function(
    Backbone,
    Template
) {
    var ButtonLoader = Backbone.View.extend({
        tagName: "i",
        className: "fa fa-spinner fa-spin hide",
        template: _.template(Template),
        show: function() {
            this.$el.removeClass("hide")
        },
        hide: function() {
            this.$el.addClass("hide")
        }
    });

    return new ButtonLoader;
})
