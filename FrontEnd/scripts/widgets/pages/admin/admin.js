define([
    'Backbone',
    'text!widgets/pages/admin/admin.html',
    'widgets/pages/admin/admin.model'
], function(
    Backbone,
    Template,
    AdminModel
) {
    var AdminView = Backbone.View.extend({
        className: "admin-container",
        events: {
            "click .add-news-button": "saveNews"
        },
        model: AdminModel,
        template: _.template(Template),
        initialize: function() {

        },
        render: function() {
            this.$el.html(this.template());
            return this
        },
        clearForm: function() {
            this.$('#content').val("");
            this.$('#type').val("");
            this.$('#title').val("");
            this.$('#location').val("");
        },
        saveNews: function() {
            var self = this;
            this.model.set({
                content: this.$('#content').val(),
                type: this.$('#type').val(),
                title: this.$('#title').val(),
                location: this.$('#location').val(),
                date: new Date().toDateString(),
                verifiedBy: "Vino"
            })
            this.model.save(null, {
                success: function() {
                    self.clearForm();
                },
                error: function(err) {
                    console.log(err)
                }
            });
        }
    });

    return AdminView;
})
