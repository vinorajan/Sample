var mongoose = require('mongoose');
// Connection url
var uri = 'mongodb://127.0.0.1/vinoraj';
module.exports = function() {
    var options = {
        db: { native_parser: true },
        server: { poolSize: 5 }
    }

    mongoose.connect(uri, options);
}
