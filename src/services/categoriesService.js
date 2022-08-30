const { Category, sequelize } = require('../database/models');

const createCategory = async (name) => {
  const result = await sequelize.transaction(async (transaction) => {
    const category = await Category.create({ name }, { transaction });

    return category;
  });

  return result;
};

const getAllCategories = async () => Category.findAll();

module.exports = {
  createCategory,
  getAllCategories,
};
