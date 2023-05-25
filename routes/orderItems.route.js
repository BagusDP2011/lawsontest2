const express = require("express");
const orderItemsController = require("../controllers/orderItems.controller");

const router = express.Router();

router
  .route("/")
  .get(orderItemsController.getData)
  .post(orderItemsController.addData);
  
  router
  .route("/:order_id")
  .get(orderItemsController.getSpecificData)
  .patch(orderItemsController.updateData)
  .delete(orderItemsController.deleteData);

module.exports = router;
