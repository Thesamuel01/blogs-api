const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);

  return token;
};

const validateToken = (token) => {
  const values = jwt.verify(token, JWT_SECRET, (err, decode) => {
    if (err) {
      throw boom.unauthorized('Expired or invalid token');
    }

    return decode;
  });

  return values;
};

module.exports = {
  createToken,
  validateToken,
  decodeToken,
};
