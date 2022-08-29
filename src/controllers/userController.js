const userService = require('../services/userService');

const create = async (req, res) => {
  const userData = req.body;

  const token = await userService.createUser(userData);

  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getUser(id);

  return res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getUser,
};
