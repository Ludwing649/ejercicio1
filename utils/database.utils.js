const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '6490084',
    port: 5432,
    database: 'checkin',
});
module.exports = { db }
