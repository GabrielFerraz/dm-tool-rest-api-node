'use strict';
module.exports = function(app) {
  var character = require('../controllers/characterController');

  // todoList Routes
  app.route('/characters')
    .get(character.list_all_chars)
    .post(character.create_a_char);


  app.route('/characters/:charId')
    .get(character.read_a_char)
    .put(character.update_a_char)
    .delete(character.delete_a_char);
};