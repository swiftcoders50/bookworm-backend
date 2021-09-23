const { insertMany } = require("../models/Book");
const Book = require("../models/Book");

// Add new book
async function addNewBook(req, res) {
	const newBook = new Book(req.body);
	const result = await newBook.save();
	res.status(200).json({
		message: "New book added successfully.",
		newBookData: result,
	});
}

// Add all new books
async function addAllNewBooks(req, res) {
	const result = await Book.insertMany(req.body);
	res.status(200).json({
		message: "All new books added successfully.",
		allNewBookData: result,
	});
}

// Get books data
async function getBooks(req, res) {
	const books = await Book.find();
	res.status(200).json(books);
}

// Get foreign books data
async function foreignBooks(req, res) {
	const books = await Book.find({ bookCategory: "foreign-book" });
	res.status(200).json(books);
}

// Get best-seller books data
async function bestSellerBooks(req, res) {
	const books = await Book.find({ bookCategory: "best-seller" });
	res.status(200).json(books);
}

// Get best-seller books data
async function unreleasedBooks(req, res) {
	const books = await Book.find({ bookCategory: "unreleased-books" });
	res.status(200).json(books);
}

module.exports = {
	addNewBook,
	getBooks,
	foreignBooks,
	addAllNewBooks,
	bestSellerBooks,
	unreleasedBooks,
};
