const validateLogin = require('./loginSchema');
const validateUser = require('./userSchema');
const validateCategory = require('./categorySchema');
const validatePost = require('./postSchema');

module.exports = {
  validateLogin,
  validateUser,
  validateCategory,
  validatePost,
};