const express = require('express');
const rescue = require('express-rescue');

const userController = require('../controllers/userController');
const middlewares = require('../middlewares');
const schemas = require('../schemas');

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
  rescue(middlewares.reqValidation(schemas.user)),
  rescue(userController.create),
]);

userRoute.delete('/me', [
  rescue(middlewares.auth),
  rescue(userController.destroy),
]);

module.exports = userRoute;
