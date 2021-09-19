const express = require("express");
const { orders } = require("../controllers/ordersController");

const router = express.Router();


router.get("/", orders);

module.exports = router;
