var Sequelize = require('sequelize');

 module.exports = new Sequelize('dental_system', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });