const express = require('express');
const masterStatus = require('./routes/masterStatus.route');
const merchant = require('./routes/merchant.route');
const city = require('./routes/city.route');
const orderItems = require('./routes/orderItems.route');
const orderStatus = require('./routes/orderStatus.route');
const users = require('./routes/users.route');
const products = require('./routes/products.route');
const exportsRoute = require('./routes/export.route');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/master-status', masterStatus);
app.use('/merchant', merchant);
app.use('/city', city);
app.use('/orderItems', orderItems);
app.use('/orderStatus', orderStatus);
app.use('/users', users);
app.use('/exports', exportsRoute);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });

module.exports = app;
