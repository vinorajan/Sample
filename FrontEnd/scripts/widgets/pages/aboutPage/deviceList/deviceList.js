define([
    'Backbone',
    'text!widgets/pages/aboutPage/deviceList/deviceList.html',
    'widgets/common/switch/switch'
], function(
    Backbone,
    Template,
    DeviceSwitch
) {
    var AddDevice = Backbone.View.extend({
        className: "device-list-container",
        template: _.template(Template),
        events: {

        },
        initialize: function() {
            this.collection.getAbout();
            this.listenTo(this.collection, "success", this.render.bind(this));
            this.listenTo(this.collection, "add", this.render.bind(this))
        },
        render: function() {
            this.$el.html(this.template());
            this.renderSwitch();
            return this;
        },
        renderSwitch: function() {
            var self = this;
            this.collection.each(function(model) {
                var deviceSwitch = new DeviceSwitch({ deviceName: model.get("deviceName"), value: model.get("switch"), callBack: self.switchChange.bind(self, model) });
                self.$(".device-item").append(deviceSwitch.render().el)
            })
        },
        switchChange: function(model, value) {
            model.set("switch", value);
            model.save();
        }
    });

    return AddDevice;
})