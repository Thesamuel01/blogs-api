const categoriesService = require('../services/categoriesService');

const create = async (req, res) => {
  const { name } = req.body;

  const result = await categoriesService.createCategory(name);

  return res.status(201).json(result);
};

module.exports = {
  create,
};
