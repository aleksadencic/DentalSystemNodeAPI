const Sequelize = require('sequelize');
const db = require('../db/mysql_db');

const Dentist = db.define('dentist', {
    dentistID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    card_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
        freezeTableName: true,
        tableName: 'dentist',
        timestamps: false
    });

module.exports = Dentist;