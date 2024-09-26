const { DataTypes } = require('sequelize');
const sequelize = require('../config/configConnection');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}
// ,
// {
//     freezeTableName: true, // Prevent Sequelize from pluralizing table name

// don't add the timestamp attributes (updatedAt, createdAt)
//  timestamps: false,

  // If don't want createdAt
//  createdAt: false,

  // If don't want updatedAt
//  updatedAt: false,

//   }
);

module.exports = User;
