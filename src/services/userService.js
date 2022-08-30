const boom = require('@hapi/boom');

const { User, sequelize } = require('../database/models');
const tokenUtilities = require('../utils/token');

const checkEmailRegister = async (email) => {
  const result = await User.findOne({
    where: { email },
  });

  if (result !== null) throw boom.conflict('User already registered');
};

const createUser = async ({ displayName, email, password, image }) => {
  await checkEmailRegister(email);

  await sequelize.transaction(async (transaction) => {
    await User.create({ displayName, email, password, image }, { transaction });
  });

  const token = tokenUtilities.createToken({ email });

  return token;
};

const getAllUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getUser = async (id) => {
  const result = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  if (!result) throw boom.notFound('User does not exist');

  return result;
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
};
