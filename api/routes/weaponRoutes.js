'use strict';
module.exports = function(app) {
  var character = require('../controllers/weaponController');

  // todoList Routes
  app.route('/weapons')
    .get(character.list_all_chars)
    .post(character.create_a_char);


  app.route('/weapons/:weaponId')
    .get(character.read_a_char)
    .put(character.update_a_char)
    .delete(character.delete_a_char);
};