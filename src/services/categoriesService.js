const { Category, sequelize } = require('../database/models');

const createCategory = async (name) => {
  let category;
  let transaction;
  let dbError = null;

  try {
    transaction = await sequelize.transaction();

    category = await Category.create({ name }, { transaction });

    await transaction.commit();
  } catch (error) {
    dbError = error;

    await transaction.rollback();
  }

  if (dbError) throw new Error(dbError.message);

  return category;
};

const getAllCategories = async () => Category.findAll();

module.exports = {
  createCategory,
  getAllCategories,
};
