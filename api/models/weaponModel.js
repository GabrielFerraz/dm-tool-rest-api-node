'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeaponSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    type: {
        type: String
    },
    range: {
        type: String
    },
    hands: {
        type: String
    },
    damage: {
        type: String
    },
    crit: {
        type: String
    }
});

module.exports = mongoose.model('Weapons', WeaponSchema);