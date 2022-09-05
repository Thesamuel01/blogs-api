const router = require('express').Router();
const rescue = require('express-rescue');

const { categoriesController } = require('../controllers');
const middlewares = require('../middlewares');
const schemas = require('../schemas');

router.get('/', [
  rescue(middlewares.auth),
  rescue(categoriesController.getAll),
]);

router.post('/', [
  rescue(middlewares.auth),
  rescue(middlewares.reqValidation(schemas.category)),
  rescue(categoriesController.create),
]);

module.exports = router;
