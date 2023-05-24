// models/OrderStatus.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrderStatus = sequelize.define('OrderStatus', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = OrderStatus;