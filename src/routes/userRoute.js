const express = require('express');
const rescue = require('express-rescue');

const middlewares = require('../middlewares');
const userController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.get('/', [
  rescue(middlewares.auth),
  rescue(userController.getAll),
]);

userRoute.get('/:id', [
  rescue(middlewares.auth),
  rescue(userController.getUser),
]);

userRoute.post('/', [
  rescue(middlewares.userValidation),
  rescue(userController.create),
]);

userRoute.delete('/me', [
  rescue(middlewares.auth),
  rescue(userController.destroy),
]);

module.exports = userRoute;
