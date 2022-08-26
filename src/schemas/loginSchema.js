const joi = require('joi');

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const validate = (login) => schema.validate(login);

module.exports = {
  validate,
};
