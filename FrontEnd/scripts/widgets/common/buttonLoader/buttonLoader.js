define([
    'Backbone'
], function(
    Backbone
) {
    var ButtonLoader = Backbone.View.extend({
        tagName: "i",
        className: "fa fa-spinner fa-spin hide",
        show: function() {
            this.$el.removeClass("hide")
        },
        hide: function() {
            this.$el.addClass("hide")
        }
    });

    return new ButtonLoader;
})
