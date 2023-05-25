const express = require("express");
const exportController = require("../controllers/export.controller");

const router = express.Router();

router
  .route("/monthly/:email")
  .get(exportController.exportMonthly)

module.exports = router;
