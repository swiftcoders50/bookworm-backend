const { addNewAdmin } = require("../controllers/adminController");
const express = require("express");
const router = express.Router();

router.post("/addNewAdmin", addNewAdmin);

module.exports = router;
