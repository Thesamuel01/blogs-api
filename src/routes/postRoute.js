const express = require('express');
const rescue = require('express-rescue');

const middlewares = require('../middlewares');
const postController = require('../controllers/postController');

const postRoute = express.Router();

postRoute.get('/', [
  rescue(middlewares.auth),
  rescue(postController.getAll),
]);

postRoute.get('/:id', [
  rescue(middlewares.auth),
  rescue(postController.getById),
]);

postRoute.post('/', [
  rescue(middlewares.auth),
  rescue(middlewares.postValidation),
  rescue(postController.create),
]);

postRoute.put('/:id', [
  rescue(middlewares.auth),
  rescue(middlewares.postValidation),
  rescue(postController.update),
]);

postRoute.delete('/:id', [
  rescue(middlewares.auth),
  rescue(postController.destroy),
]);

module.exports = postRoute;
