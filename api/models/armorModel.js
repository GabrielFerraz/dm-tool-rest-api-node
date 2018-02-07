'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArmorSchema = new Schema({
    name: String,
    price: Number,
    defenceMod: Number,
    type: {
      type: [{
        type: String,
        enum: ["light", "medium", "heavy"]
      }]
    }
});

module.exports = mongoose.model('Armors', ArmorSchema);