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
        type: number,
        default: 0
    },
    level: {
        type: number,
        default: 1
    },
    str: {
        type: number,
        default: 1
    },
    dec: {
        type: number,
        default: 1
    },
    con: {
        type: number,
        default: 1
    },
    int: {
        type: number,
        default: 1
    },
    wis: {
        type: number,
        default: 1
    },
    cha: {
        type: number,
        default: 1
    }
})