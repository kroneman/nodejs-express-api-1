const express = require('express');
const logger = require('morgan');

const routes = require('./router');
const bodyParser = require('body-parser');

function createServer() {
    const app = express();

    app.use(bodyParser.json());
    app.use('/api', routes);
    app.use(logger('dev'));

    return app;
}

module.exports = createServer;