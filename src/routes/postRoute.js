const router = require('express').Router();
const rescue = require('express-rescue');

const { postController } = require('../controllers');
const middlewares = require('../middlewares');
const schemas = require('../schemas');

router.get('/', [
  rescue(middlewares.auth),
  rescue(postController.getAll),
]);

router.get('/search', [
  rescue(middlewares.auth),
  rescue(postController.search),
]);

router.get('/:id', [
  rescue(middlewares.auth),
  rescue(postController.getById),
]);

router.post('/', [
  rescue(middlewares.auth),
  rescue(middlewares.reqValidation(schemas.post, true)),
  rescue(postController.create),
]);

router.put('/:id', [
  rescue(middlewares.auth),
  rescue(middlewares.reqValidation(schemas.post, true)),
  rescue(postController.update),
]);

router.delete('/:id', [
  rescue(middlewares.auth),
  rescue(postController.destroy),
]);

module.exports = router;
