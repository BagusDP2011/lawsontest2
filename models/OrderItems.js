// models/OrderItems.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Products = require('./Products');
const Users = require('./Users');

const OrderItems = sequelize.define('OrderItems', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

OrderItems.belongsTo(Products, { foreignKey: 'product_id' });
OrderItems.belongsTo(Users, { foreignKey: 'user_id' });

module.exports = OrderItems;