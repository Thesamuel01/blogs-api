const express = require('express');
const rescue = require('express-rescue');

const loginRoute = express.Router();

loginRoute.post('/', rescue((req, res) => {
  console.log('POST - /login');
}));

module.exports = loginRoute;
