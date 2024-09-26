const { Sequelize } = require('sequelize');
require('dotenv').config();

// Connect to the PostgreSQL database
const sequelize = new Sequelize('TestDB', process.env.DatabaseUserName, process.env.DatabasePassword , {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
