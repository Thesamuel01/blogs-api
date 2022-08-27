const joi = require('joi');

const schema = joi.object({
  displayName: joi.string().min(8).required().message({
    message: '400|"displayName" length must be at least 8 characters long',
  }),
  email: joi.string().email().required().message({
    message: '400|"email" must be a valid email',
  }),
  password: joi.string().min(6).required().message({
    message: '400|"password" length must be at least 6 characters long',
  }),
});

module.exports = (login) => schema.validate(login);
