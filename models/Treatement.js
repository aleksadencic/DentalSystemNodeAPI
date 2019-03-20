const Sequelize = require('sequelize');
const db = require('../db/mysql_db');

// Import classes for foreign keys
const Dentist = require('./Dentist');
const Patient = require('./Patient');

const Treatement = db.define('treatement', {
    treatementID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE
    },
    note: {
        type: Sequelize.STRING
    },
    cost: {
        type: Sequelize.FLOAT
    }
}, {
        freezeTableName: true,
        tableName: 'treatement',
        timestamps: false
    });

Dentist.hasMany(Treatement, { foreignKey: 'dentistID' })
Patient.hasMany(Treatement, { foreignKey: 'patientID' })

module.exports = Treatement;