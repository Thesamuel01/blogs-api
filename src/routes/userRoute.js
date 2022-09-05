const router = require('express').Router();
const rescue = require('express-rescue');

const { userController } = require('../controllers');
const middlewares = require('../middlewares');
const schemas = require('../schemas');

router.get('/', [
  rescue(middlewares.auth),
  rescue(userController.getAll),
]);

router.get('/:id', [
  rescue(middlewares.auth),
  rescue(userController.getUser),
]);

router.post('/', [
  rescue(middlewares.reqValidation(schemas.user)),
  rescue(userController.create),
]);

router.delete('/me', [
  rescue(middlewares.auth),
  rescue(userController.destroy),
]);

module.exports = router;
