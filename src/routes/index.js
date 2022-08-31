const login = require('./loginRoute');
const user = require('./userRoute');
const categories = require('./categoriesRoute');
const post = require('./postRoute');

module.exports = {
  login,
  user,
  categories,
  post,
};
