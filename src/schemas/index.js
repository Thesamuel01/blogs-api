const validateLogin = require('./loginSchema');
const validateUser = require('./userSchema');
const validateCategory = require('./categorySchema');

module.exports = {
  validateLogin,
  validateUser,
  validateCategory,
};