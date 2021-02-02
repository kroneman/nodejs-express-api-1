const Sequelize = require('sequelize');
const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres'
});

async function connectToDatabase() {
    return sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        });
}

function createTables() {
    const Note = sequelize.define('notes', { note: Sequelize.TEXT, tag: Sequelize.STRING });
    return sequelize.sync({ force: true })
        .then(() => {
            console.log(`Database & tables created!`);
        });
}

async function initModels() {
    await connectToDatabase();
    await createTables();
}

module.exports = initModels;