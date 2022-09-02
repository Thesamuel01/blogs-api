const boom = require('@hapi/boom');
const bcrypt = require('bcryptjs');

const { User } = require('../database/models');
const tokens = require('../token');

const checkUserLogin = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) return user;

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  return isPasswordCorrect;
};

const getToken = async (login) => {
  const { email } = login;
  const isUser = await checkUserLogin(login);

  if (!isUser) throw boom.badRequest('Invalid fields');

  const token = tokens.generate({ email, id: isUser.id });

  return token;
};

module.exports = {
  getToken,
};
