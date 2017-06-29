'use strict';
//create schema for blog post
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NewsSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },
    type: {
        type: String,
        required: [true, "type is required"]
    },
    location: {
        type: String,
        required: [true, "Location is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    filePath: {
        type: String
    }
});

var NewsModel = mongoose.model('product', NewsSchema)

module.exports = NewsModel
