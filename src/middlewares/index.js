const errorHandler = require('./errorHandler');
const loginValidation = require('./loginValidation');
const userValidation = require('./userValidation');
const auth = require('./authorization');
const categoryValidation = require('./categoriesValidation');

module.exports = {
  errorHandler,
  loginValidation,
  userValidation,
  auth,
  categoryValidation,
};
