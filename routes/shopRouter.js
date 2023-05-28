const express = require("express");
const router = express.Router();
const addShop = require("../controllers/shops/addShop");
router.post("/", addShop);

module.exports = router;
