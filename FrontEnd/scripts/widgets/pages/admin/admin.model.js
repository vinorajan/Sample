define([
    'Backbone',
    'Config'
], function(
    Backbone,
    Config
) {
    var AdminModel = Backbone.Model.extend({
        defaults: {
            type: "",
            title: "",
            content: "",
            location: "",
            verifiedBy: "",
            file: ""
        },
        urlRoot: Config.API_URL_V1() + "/news",
        createImage: function(file) {
            var self = this;
            var reader = new FileReader();
            reader.onload = function(event) {
                self.set("file", event.target.result)
            };
            reader.readAsDataURL(file);
        }
    });

    return new AdminModel;
})
