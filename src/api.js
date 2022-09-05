const express = require('express');

const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', routes.login);
app.use('/user', routes.user);
app.use('/categories', routes.categories);
app.use('/post', routes.post);
app.use('/api-docs', routes.docs);

app.use(middlewares.errorHandler);

module.exports = app;
