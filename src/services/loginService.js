const boom = require('@hapi/boom');

const { User } = require('../database/models');
const tokens = require('../token');

const checkUser = async ({ email, password }) => {
  const result = await User.findOne({
    where: {
      email,
      password,
    },
  });

  return result;
};

const getToken = async (login) => {
  const { email } = login;
  const hasUser = await checkUser(login);

  if (!hasUser) throw boom.badRequest('Invalid fields');

  const token = tokens.generate({ email, id: hasUser.id });

  return token;
};

module.exports = {
  getToken,
};
