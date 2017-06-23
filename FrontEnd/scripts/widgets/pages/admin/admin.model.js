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
            date: "",
            verifiedBy: "",
        },
        urlRoot: Config.API_URL_V1() + "/news"
    });

    return new AdminModel;
})
