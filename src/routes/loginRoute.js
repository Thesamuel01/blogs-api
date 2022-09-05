const router = require('express').Router();
const rescue = require('express-rescue');

const { loginController } = require('../controllers');
const middlewares = require('../middlewares');
const schemas = require('../schemas');

router.post('/', [
  rescue(middlewares.reqValidation(schemas.login, true)),
  rescue(loginController.login),
]);

module.exports = router;
