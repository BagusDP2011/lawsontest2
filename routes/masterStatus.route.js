const express = require("express");
const merchantController = require("../controllers/merchant.controller");

const router = express.Router();

router
  .route("/")
  .get(merchantController.getData)
  .post(merchantController.addData);
  
  router
  .route("/:id")
  .get(merchantController.getSpecificData)
  .patch(merchantController.updateData)
  .delete(merchantController.deleteData);

module.exports = router;
