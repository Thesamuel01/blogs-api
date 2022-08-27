const boom = require('@hapi/boom');

const { User } = require('../database/models/');
const tokens = require('../utils/token');

const getToken = async ({ email, password}) => {
  const result = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if(!result) throw boom.badRequest('Invalid fields');

  const token = tokens.createToken(email);

  return res.status(200).json({ token });
};

module.exports = {
  getToken,
};
