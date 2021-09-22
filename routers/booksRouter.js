const express = require("express");
const {
	addNewBook,
	addAllNewBooks,
	getBooks,
	foreignBooks,
	bestSellerBooks,
} = require("../controllers/booksController");

const router = express.Router();

// Add new book
router.post("/addNewBook", addNewBook);

// Add all new books
router.post("/addAllNewBooks", addAllNewBooks);

// Get Books Data
router.get("/", getBooks);

// get foreigner books
router.get("/foreign-books", foreignBooks);

// get best seller books
router.get("/best-seller-books", bestSellerBooks);

module.exports = router;
