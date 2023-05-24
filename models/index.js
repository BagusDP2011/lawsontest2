const sequelize = require('../config/database');
const MasterStatus = require('./MasterStatus');
const Merchant = require('./Merchant');
const OrderItems = require('./OrderItems');
const City = require('./City');
const OrderStatus = require('./OrderStatus');
const Users = require('./Users');
const Products = require('./Products');

// Menghubungkan model dengan database
async function initialize() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Membuat relasi antar model
    Merchant.hasMany(Products, { foreignKey: 'merchant_id' });
    Products.belongsTo(Merchant, { foreignKey: 'merchant_id' });
    OrderItems.belongsTo(Products, { foreignKey: 'product_id' });
    OrderItems.belongsTo(Users, { foreignKey: 'user_id' });
    OrderStatus.belongsTo(OrderItems, { foreignKey: 'order_id' });
    MasterStatus.hasMany(OrderStatus, { foreignKey: 'status_id' });
    City.hasMany(Merchant, { foreignKey: 'city_id' });

    // Sinkronisasi model dengan database
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Memanggil fungsi initialize untuk menghubungkan dan memuat model
initialize();