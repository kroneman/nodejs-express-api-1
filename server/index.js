require('dotenv').config();

const initModels = require('./models');
const app = require('./app');

const { SERVER_PORT } = process.env;

initModels().then(() => {
    app.listen(
        SERVER_PORT,
        () => console.log(`notes-app listening on port ${SERVER_PORT}!`)
    )
})