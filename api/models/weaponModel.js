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
    damageType: {
        type: String
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
    critRange: {
        type: String
    },
    critModifier: {
        type: Number
    }
});

module.exports = mongoose.model('Weapons', WeaponSchema);