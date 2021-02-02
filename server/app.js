const express = require('express');

const initRoutes = require('./routes');

async function createServer() {
    const app = express();

    initRoutes(app);

    return app;
}

module.exports = createServer;