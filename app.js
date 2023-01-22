const express = require('express');
const { router } = require('./router/rootRouter');
const { globalErrorHandler } = require('./middlewares/globalErrorHandler');
const { notFoundHandler } = require('./middlewares/notFoundHandler');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(notFoundHandler);

app.use(globalErrorHandler);

module.exports = { app };
