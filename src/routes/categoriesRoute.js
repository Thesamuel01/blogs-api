const express = require('express');
const rescue = require('express-rescue');

const middlewares = require('../middlewares');
const categoriesController = require('../controllers/categoriesController');

const categoriesRoute = express.Router();

categoriesRoute.get('/', [
  rescue(middlewares.auth),
  rescue(categoriesController.getAll),
]);

categoriesRoute.post('/', [
  rescue(middlewares.auth),
  rescue(middlewares.categoryValidation),
  rescue(categoriesController.create),
]);

module.exports = categoriesRoute;
