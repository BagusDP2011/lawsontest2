// models/Products.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Merchant = require('./Merchant');

const Products = sequelize.define('Products', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  merchant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Products.belongsTo(Merchant, { foreignKey: 'merchant_id' });

module.exports = Products;
