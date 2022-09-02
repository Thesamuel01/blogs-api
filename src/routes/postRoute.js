const express = require('express');
const rescue = require('express-rescue');

const postController = require('../controllers/postController');
const middlewares = require('../middlewares');
const schemas = require('../schemas');

const postRoute = express.Router();

postRoute.get('/', [
  rescue(middlewares.auth),
  rescue(postController.getAll),
]);

postRoute.get('/search', [
  rescue(middlewares.auth),
  rescue(postController.search),
]);

postRoute.get('/:id', [
  rescue(middlewares.auth),
  rescue(postController.getById),
]);

postRoute.post('/', [
  rescue(middlewares.auth),
  rescue(middlewares.reqValidation(schemas.post, true)),
  rescue(postController.create),
]);

postRoute.put('/:id', [
  rescue(middlewares.auth),
  rescue(middlewares.reqValidation(schemas.post, true)),
  rescue(postController.update),
]);

postRoute.delete('/:id', [
  rescue(middlewares.auth),
  rescue(postController.destroy),
]);

module.exports = postRoute;
