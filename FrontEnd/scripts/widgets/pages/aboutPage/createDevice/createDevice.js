define([
    'Backbone',
    'text!widgets/pages/aboutPage/createDevice/createDevice.html',
    'widgets/pages/aboutPage/aboutPage.model'
], function(
    Backbone,
    Template,
    AboutModel
) {
    var AddDevice = Backbone.View.extend({
        className: "add-device-container",
        template: _.template(Template),
        events: {
            "click .createEquip": "addEquip"
        },
        initialize: function() {

        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        addEquip: function() {
            var self = this;
            var model = new AboutModel();
            model.set("deviceName", this.$(".devicename").val());
            model.save({}, {
                success: function(model, response) {
                    self.collection.add(response)
                },
                error: function() {
                    console.log('error');
                }
            });
            this.$(".devicename").val("");
        }
    });

    return AddDevice;
})