var mongoose = require('mongoose'),
  Character = mongoose.model('Characters');

exports.list_all_chars = function(req, res) {
  Character.find({}, function(err, char) {
    if (err)
      res.send(err);
    res.json(char);
  });
};




exports.create_a_char = function(req, res) {
  var new_char = new Character(req.body);
  new_char.save(function(err, char) {
    if (err)
      res.send(err);
    res.json(char);
  });
};


exports.read_a_char = function(req, res) {
  Character.findById(req.params.charId, function(err, char) {
    if (err)
      res.send(err);
    res.json(char);
  });
};


exports.update_a_char = function(req, res) {
  Character.findOneAndUpdate({_id: req.params.charId}, req.body, {new: true}, function(err, char) {
    if (err)
      res.send(err);
    res.json(char);
  });
};


exports.delete_a_char = function(req, res) {


  Character.remove({
    _id: req.params.charId
  }, function(err, char) {
    if (err)
      res.send(err);
    res.json({ message: 'Character successfully deleted' });
  });
};