'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    name: {
        type: String
    },
    type: {
        type: String
    }
});

module.exports = mongoose.model('Items', ItemSchema);