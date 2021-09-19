const express = require("express");
const { addNewBook, getBooks } = require("../controllers/booksController");

const router = express.Router();

// Add new book
router.post("/addNewBook", addNewBook);

// Get Books Data
router.get("/", getBooks);

module.exports = router;
