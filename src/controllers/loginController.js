const { loginService } = require('../services');

const login = async (req, res) => {
  const loginData = req.body;

  const token = await loginService.getToken(loginData);

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
