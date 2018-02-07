'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeaponSchema = new Schema({
    name: String,
    price: Number,
    damageType: String,
    type: String,
    range: String,
    hands: String,
    damage: String,
    critRange: String,
    critModifier: Number
});

module.exports = mongoose.model('Weapons', WeaponSchema);