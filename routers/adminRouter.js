const express = require("express");
const { addNewAdmin, getAdmin } = require("../controllers/adminController");

const router = express.Router();

router.get("/", getAdmin);
router.post("/addNewAdmin", addNewAdmin);

module.exports = router;
