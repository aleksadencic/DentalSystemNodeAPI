const Sequelize = require('sequelize');
const db = require('../db/mysql_db');

const DentalService = db.define('dental_service', {
    dental_serviceID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cost: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    vat: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
        freezeTableName: true,
        tableName: 'dental_service',
        timestamps: false
    });

module.exports = DentalService;