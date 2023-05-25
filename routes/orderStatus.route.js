const express = require("express");
const orderStatusController = require("../controllers/orderStatus.controller");

const router = express.Router();

router
  .route("/")
  .get(orderStatusController.getData)
  .post(orderStatusController.addData);
  
  router
  .route("/:order_id")
  .get(orderStatusController.getSpecificData)
  .patch(orderStatusController.updateData)
  .delete(orderStatusController.deleteData);

module.exports = router;
