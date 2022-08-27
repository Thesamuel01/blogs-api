const express = require('express');
const rescue = require('express-rescue');

const middlewares = require('../middlewares');
const loginController = require('../controllers/loginController');

const loginRoute = express.Router();

loginRoute.post('/', [
  rescue(middlewares.loginValidation),
  rescue(loginController.login),
]);

module.exports = loginRoute;
