const boom = require('@hapi/boom');

const { User, sequelize } = require('../database/models');
const tokenUtilities = require('../utils/token');

const checkEmailRegister = async (email) => {
  const result = await User.findOne({
    where: { email },
  });

  return result !== null;
};

const createUser = async ({ displayName, email, password, image }) => {
  const hasUser = await checkEmailRegister(email);

  if (hasUser) throw boom.conflict('User already registered');

  let transaction;
  let dbError = null;

  try {
    transaction = await sequelize.transaction();

    await User.create({ displayName, email, password, image }, { transaction });

    await transaction.commit();
  } catch (error) {
    dbError = error;

    await transaction.rollback();
  }

  if (dbError) throw new Error(dbError.message);

  const token = tokenUtilities.createToken({ email });

  return token;
};

const getAllUsers = async () => User.findAll();

module.exports = {
  createUser,
  getAllUsers,
};
