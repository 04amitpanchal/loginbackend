var express = require('express');
var routers = express.Router();

/* GET users listing. */
routers.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = routers;
