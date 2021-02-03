const express = require('express');
const logger = require('morgan');

const routes = require('./router');
const bodyParser = require('body-parser');

async function createServer() {
    const app = express();

    app.use('/api', routes);
    app.use(bodyParser.json());
    app.use(logger('dev'))

    return app;
}

module.exports = createServer;