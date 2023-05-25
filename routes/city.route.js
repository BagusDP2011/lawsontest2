const express = require("express");
const cityController = require("../controllers/city.controller");

const router = express.Router();

router
  .route("/")
  .get(cityController.getData)
  .post(cityController.addData);
  
  router
  .route("/:id")
  .get(cityController.getSpecificData)
  .patch(cityController.updateData)
  .delete(cityController.deleteData);

module.exports = router;
