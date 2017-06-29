define([
    'Backbone',
    'text!widgets/pages/admin/admin.html',
    'widgets/pages/admin/admin.model',
    'widgets/common/buttonLoader/buttonLoader'
], function(
    Backbone,
    Template,
    AdminModel,
    ButtonLoader
) {
    var AdminView = Backbone.View.extend({
        className: "admin-container",
        events: {
            "click .add-news-button": "saveNews",
            "change #image": "addFile"
        },
        model: AdminModel,
        template: _.template(Template),
        initialize: function() {

        },
        render: function() {
            this.$el.html(this.template());
            this.$(".add-news-button").append(ButtonLoader.el);
            return this
        },
        clearForm: function() {
            this.$('#content').val("");
            this.$('#type').val("");
            this.$('#title').val("");
            this.$('#location').val("");
            this.$('#image').val("");
        },
        addFile: function(e) {
            this.model.createImage(e.target.files[0])
        },
        saveNews: function() {
            var self = this;
            this.model.set({
                content: this.$('#content').val(),
                type: this.$('#type').val(),
                title: this.$('#title').val(),
                location: this.$('#location').val(),
                verifiedBy: "Vino"
            });
            ButtonLoader.show();
            this.model.save(null, {
                success: function() {
                    ButtonLoader.hide()
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
