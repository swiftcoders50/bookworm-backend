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

module.exports = {
	addNewBook,
	getBooks,
	foreignBooks,
};
