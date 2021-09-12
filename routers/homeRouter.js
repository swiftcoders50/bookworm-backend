const express = require("express");
const { homeMessage } = require("../controllers/homeController");

const router = express.Router();

// Homepage get router
router.get("/", homeMessage);

module.exports = router;
