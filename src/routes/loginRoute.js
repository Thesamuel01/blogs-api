const express = require('express');
const rescue = require('express-rescue');

const loginController = require('../controllers/loginController');
const middlewares = require('../middlewares');
const schemas = require('../schemas');

const loginRoute = express.Router();

loginRoute.post('/', [
  rescue(middlewares.reqValidation(schemas.login, true)),
  rescue(loginController.login),
]);

module.exports = loginRoute;
