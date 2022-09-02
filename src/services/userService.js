const boom = require('@hapi/boom');
const bcrypt = require('bcryptjs');

const { User, sequelize } = require('../database/models');
const tokens = require('../token');

const checkEmailRegister = async (email) => {
  const result = await User.findOne({
    where: { email },
  });

  if (result !== null) throw boom.conflict('User already registered');
};

const createUser = async ({ displayName, email, password, image }) => {
  await checkEmailRegister(email);

  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);

  await sequelize.transaction(async (transaction) => {
    await User.create({ displayName, email, password: hash, image }, { transaction });
  });

  const token = tokens.generate({ email });

  return token;
};

const getAllUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getUser = async (id) => {
  const result = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  if (!result) throw boom.notFound('User does not exist');

  return result;
};

const deleteUser = async (id) => {
  await sequelize.transaction(async (transaction) => {
    await User.destroy(
      { where: { id } },
      { transaction },
    );
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
};
