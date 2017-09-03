define([
    'Backbone',
    'text!widgets/common/switch/switch.html'
], function(
    Backbone,
    Template
) {
    var Switch = Backbone.View.extend({
        template: _.template(Template),
        events: {
            "change input": "updateSwitch"
        },
        initialize: function(options) {
            this.value = options.value || false; //True for enable false for disable
            this.deviceName = options.deviceName;
            this.callBack = options.callBack;
        },
        render: function() {
            var checked = this.value ? "checked" : "";
            this.$el.html(this.template({ checked: checked, deviceName: this.deviceName }));
            return this
        },
        updateSwitch: function(e) {
            this.value = e.target.checked;
            if (this.callBack) {
                this.callBack(this.value);
            }
        }
    });

    return Switch;
})