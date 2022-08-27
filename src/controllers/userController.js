const userService = require('../services/userService');

const create = (req, res) => {
  const userData = req.body;

  const token = userService.createUser(userData);

  return res.status(200).json({ token });
};

module.exports = {
  create,
};
