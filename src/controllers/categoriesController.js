const { categoriesService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;

  const result = await categoriesService.createCategory(name);

  return res.status(201).json(result);
};

const getAll = async (_req, res) => {
  const categories = await categoriesService.getAllCategories();

  return res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};
