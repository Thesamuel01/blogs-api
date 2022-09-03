const login = require('./loginRoute');
const user = require('./userRoute');
const categories = require('./categoriesRoute');
const post = require('./postRoute');
const docs = require('./docsRoute');

module.exports = {
  login,
  user,
  categories,
  post,
  docs,
};
