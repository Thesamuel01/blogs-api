const express = require('express');
const rescue = require('express-rescue');

const categoriesController = require('../controllers/categoriesController');
const middlewares = require('../middlewares');
const schemas = require('../schemas');

const categoriesRoute = express.Router();

categoriesRoute.get('/', [
  rescue(middlewares.auth),
  rescue(categoriesController.getAll),
]);

categoriesRoute.post('/', [
  rescue(middlewares.auth),
  rescue(middlewares.reqValidation(schemas.category)),
  rescue(categoriesController.create),
]);

module.exports = categoriesRoute;
