define([
    'Backbone',
    'text!widgets/pages/login/login.html',
], function(
    Backbone,
    Template
) {
    var LoginView = Backbone.View.extend({
        className: "login-container",
        template: _.template(Template),
        initialize: function() {

        },
        render: function() {
            this.$el.html(this.template());
            return this
        }
    });

    return LoginView;
})
