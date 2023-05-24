// models/MasterStatus.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MasterStatus = sequelize.define('MasterStatus', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = MasterStatus;