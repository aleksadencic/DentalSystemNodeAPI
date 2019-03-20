const Sequelize = require('sequelize');
const db = require('../db/mysql_db');

const Tooth = db.define('tooth', {
    toothID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    label: {
        type: Sequelize.STRING
    }
}, {
        freezeTableName: true,
        tableName: 'tooth',
        timestamps: false
    });

module.exports = Tooth