const userService = require('../services/userService');

const create = async (req, res) => {
  const userData = req.body;

  const token = await userService.createUser(userData);

  return res.status(201).json({ token });
};

module.exports = {
  create,
};
