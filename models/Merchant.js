// models/Merchant.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const City = require('./City');

const Merchant = sequelize.define('Merchant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  merchant_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  expired_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Merchant.belongsTo(City, { foreignKey: 'city_id' });

module.exports = Merchant;