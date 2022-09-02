const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' };

module.exports = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);

  return token;
};
