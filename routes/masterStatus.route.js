const express = require("express");
const masterStatusController = require("../controllers/masterStatus.controller");

const router = express.Router();

router
  .route("/")
  .get(masterStatusController.getData)
  .post(masterStatusController.addData);
  
  router
  .route("/:id")
  .get(masterStatusController.getSpecificData)
  .patch(masterStatusController.updateData)
  .delete(masterStatusController.deleteData);

module.exports = router;
