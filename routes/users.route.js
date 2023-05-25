const express = require("express");
const usersController = require("../controllers/users.controller");

const router = express.Router();

router
  .route("/")
  .get(usersController.getData)
  .post(usersController.addData);
  
  router
  .route("/:full_name")
  .get(usersController.getSpecificData)
  .patch(usersController.updateData)
  .delete(usersController.deleteData);

module.exports = router;
