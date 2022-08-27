const errorHandler = require('./errorHandler');
const loginValidation = require('./loginValidation');
const userValidation = require('./userValidation');
const auth = require('./authorization');

module.exports = {
  errorHandler,
  loginValidation,
  userValidation,
  auth,
};
