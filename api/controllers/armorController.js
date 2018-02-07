var mongoose = require('mongoose'),
  Armor = mongoose.model('Armors');

exports.list_all_armors = function(req, res) {
  Armor.find({}, function(err, armor) {
    if (err)
      res.send(err);
    res.json(armor);
  });
};




exports.create_a_armor = function(req, res) {
  var new_armor = new Armor(req.body);
  new_armor.save(function(err, armor) {
    if (err)
      res.send(err);
    res.json(armor);
  });
};


exports.read_a_armor = function(req, res) {
  Armor.findById(req.params.armorId, function(err, armor) {
    if (err)
      res.send(err);
    res.json(armor);
  });
};


exports.update_a_armor = function(req, res) {
  Armor.findOneAndUpdate({_id: req.params.armorId}, req.body, {new: true}, function(err, armor) {
    if (err)
      res.send(err);
    res.json(armor);
  });
};


exports.delete_a_armor = function(req, res) {


  Armor.remove({
    _id: req.params.armorId
  }, function(err, armor) {
    if (err)
      res.send(err);
    res.json({ message: 'Armor successfully deleted' });
  });
};