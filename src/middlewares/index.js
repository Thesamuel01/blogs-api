const errorHandler = require('./errorHandler');
const loginValidation = require('./loginValidation');
const userValidation = require('./userValidation');
const auth = require('./authorization');
const categoryValidation = require('./categoriesValidation');
const postValidation = require('./postValidation');

module.exports = {
  errorHandler,
  loginValidation,
  userValidation,
  auth,
  categoryValidation,
  postValidation,
};
