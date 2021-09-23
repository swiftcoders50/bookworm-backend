const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      trim: true,
    },
    authorName: {
      type: String,
      required: true,
      trim: true,
    },
    bookImg: {
      type: String,
      required: true,
      trim: true,
    },
    bookCategory: {
      type: String,
      required: true,
      trim: true,
    },
    bookPrice: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
