const conf = require('../config');
const sequelize =  conf.sequelize;

class User extends conf.Model { }
User.init({
    // attributes
    id: {
        type: conf.Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: conf.Sequelize.STRING,
        allowNull: false
    },
    pass: {
        type: conf.Sequelize.TEXT,
        allowNull: false
        // allowNull defaults to true
    },
    user_create: {
        type: conf.Sequelize.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    createdAt: {
        type: conf.Sequelize.DATE,
        allowNull: false
        // allowNull defaults to true
    },
    updatedAt: {
        type: conf.Sequelize.DATE,
        allowNull: false
        // allowNull defaults to true
    },
    updatedAt: {
        type: conf.Sequelize.DATE,
        allowNull: false
        // allowNull defaults to true
    }
}, {
        sequelize,
        modelName: 'tbl_users'
        // options
});
/*
User.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync tbl_users with { force: true }');
});
*/
module.exports = User;