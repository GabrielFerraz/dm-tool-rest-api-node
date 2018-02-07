'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: {
        type: String,
        requierd: "Your character needs a name"
    },
    alignment: {
        type: [{
            type: String,
            enum: ['LG', 'LN', 'LE', 'NG', 'TN', 'NE', 'CG', 'CN', 'CE']
        }]
    },
    gender: {
        type: [{
            type: String,
            enum: ['Male', 'Female']
        }]
    },
    xp: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 1
    },
    str: {
        type: Number,
        default: 10
    },
    dec: {
        type: Number,
        default: 10
    },
    con: {
        type: Number,
        default: 10
    },
    int: {
        type: Number,
        default: 10
    },
    wis: {
        type: Number,
        default: 10
    },
    cha: {
        type: Number,
        default: 10
    }
});

module.exports = mongoose.model('Characters', CharacterSchema);