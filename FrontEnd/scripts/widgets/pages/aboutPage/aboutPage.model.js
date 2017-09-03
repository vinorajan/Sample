define([
    'Backbone',
    'Config'
], function(
    Backbone,
    Config
) {
    var AboutModel = Backbone.Model.extend({
        idAttribute: '_id',
        defaults: {
            deviceName: "",
            switch: false,
        },
        urlRoot: Config.API_URL_V1() + "/about"

    });

    return AboutModel;
});