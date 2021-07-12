const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

// Generating token every single request for testing

// handled by /api route
router.use("/", mainController.generateToken);

router.route("/").get(mainController.getData).post(mainController.postData);

module.exports = router;
