const express = require('express');
const rescue = require('express-rescue');

const middlewares = require('../middlewares');
const postController = require('../controllers/postController');

const postRoute = express.Router();

postRoute.get('/', [
  rescue(middlewares.auth),
  rescue(postController.getAll),
]);

postRoute.post('/', [
  rescue(middlewares.auth),
  rescue(middlewares.postValidation),
  rescue(postController.create),
]);

module.exports = postRoute;
