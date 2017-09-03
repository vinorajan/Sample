'use strict';
//create schema for blog post
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AboutSchema = new Schema({
    switch: {
        type: Boolean,
        required: [true, "Switch is required"]
    },
    deviceName: {
        type: String,
        required: [true, "Name is required"]
    }
});

var AboutModel = mongoose.model('abouts', AboutSchema)

module.exports = AboutModel