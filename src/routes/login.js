const express = require('express');
const rescue = require('express-rescue');

const middlewares = require('../middlewares');

const loginRoute = express.Router();

loginRoute.post('/', [
  rescue(middlewares.loginValidation),
]);

module.exports = loginRoute;
