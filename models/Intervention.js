const Sequelize = require('sequelize');
const db = require('../db/mysql_db');

// Import classes for foreign keys
const Tooth = require('./Tooth');
const DentalService = require('./DentalService');
const Treatement = require('./Treatement');


const Intervention = db.define('intervention', {
    interventionID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    toothID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tooth',
            key: 'toothID'
        }
    },
    dentalServiceID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'dental_service',
            key: 'dental_serviceID'
        }
    },
    treatementID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'treatement',
            key: 'treatementID'
        }
    }
}, {
        freezeTableName: true,
        tableName: 'intervention',
        timestamps: false
    });

Tooth.hasMany(Intervention, { foreignKey: 'toothID' });
DentalService.hasMany(Intervention, { foreignKey: 'dentalServiceID' });
Treatement.hasMany(Intervention, { foreignKey: 'treatementID' });

module.exports = Intervention;