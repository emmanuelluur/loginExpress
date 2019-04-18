const Sequelize = require('sequelize');
const Model = Sequelize.Model; // ORM MODELS

/**
 * DB CONECT
 */

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    logging: false,
    host: 'localhost',
    dialect: process.env.DIALECT,  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */

    timezone: '-05:00', // for writing to database
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
});


module.exports = {
    sequelize, Sequelize, Model
}; 