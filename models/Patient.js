const Sequelize = require('sequelize');
const db = require('../db/mysql_db');

const Patient = db.define('patient', {
    patientID: {
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
    jmbg: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
}, {
        freezeTableName: true,
        tableName: 'patient',
        timestamps: false
    });

module.exports = Patient;