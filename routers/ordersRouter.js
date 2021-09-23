const express = require("express");
const { orders, addOrders } = require("../controllers/ordersController");

const router = express.Router();


router.get("/", orders);
router.post("/addOrders", addOrders);

module.exports = router;
