const express = require("express");
const {
	addNewBook,
	getBooks,
	foreignBooks,
} = require("../controllers/booksController");

const router = express.Router();

// Add new book
router.post("/addNewBook", addNewBook);

// Get Books Data
router.get("/", getBooks);

// get foreigner books
router.get("/foreign-books", foreignBooks);

module.exports = router;
