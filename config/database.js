const { Sequelize } = require('sequelize');

// Konfigurasi koneksi database
const sequelize = new Sequelize('lawsontest2', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;