require('dotenv').config();

const initModels = require('./models');
const createServer = require('./app');

const { SERVER_PORT } = process.env;
const logStarted = () => console.log(`
  listening on port http://localhost:${SERVER_PORT}
`);

(async function main() {
    const app = createServer();
    app.listen(SERVER_PORT, logStarted);
})();