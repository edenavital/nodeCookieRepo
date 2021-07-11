const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

router.route("/").get(mainController.mainGet);

module.exports = router;
