'use strict';
module.exports = function(app) {
  var character = require('../controllers/characterController');
  var weapon = require('../controllers/weaponController');
  var armor = require('../controllers/armorController');


  app.route('/characters')
    .get(character.list_all_chars)
    .post(character.create_a_char);


  app.route('/characters/:charId')
    .get(character.read_a_char)
    .put(character.update_a_char)
    .delete(character.delete_a_char);
  
  app.route('/weapons')
    .get(weapon.list_all_weapons)
    .post(weapon.create_a_weapon);


  app.route('/weapons/:weaponId')
    .get(weapon.read_a_weapon)
    .put(weapon.update_a_weapon)
    .delete(weapon.delete_a_weapon);
  
  app.route('/armors')
    .get(armor.list_all_armors)
    .post(armor.create_a_armor);


  app.route('/armors/:armorId')
    .get(armor.read_a_armor)
    .put(armor.update_a_armor)
    .delete(armor.delete_a_armor);
};