const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop.controller");

router.get("/", shopController.getAllProduct);

module.exports = router;
