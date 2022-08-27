const express = require('express');
const rescue = require('express-rescue');

const middlewares = require('../middlewares');
const userController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/', [
  rescue(middlewares.userValidation),
  rescue(userController.create),
]);

module.exports = userRoute;
