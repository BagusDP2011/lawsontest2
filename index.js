const express = require('express');
const masterStatus = require('./routes/masterStatus.route');
const merchant = require('./routes/merchant.route');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/master-status', masterStatus);
app.use('/merchant', masterStatus);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });

module.exports = app;
