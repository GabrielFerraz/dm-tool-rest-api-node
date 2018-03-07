var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Character = require('./api/models/characterModel'), //created model loading here
  Weapon = require('./api/models/weaponModel'), //created model loading here
  Weapon = require('./api/models/armorModel'), //created model loading here
  bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Dmtooldb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

var routes = require('./api/routes/dmToolRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);