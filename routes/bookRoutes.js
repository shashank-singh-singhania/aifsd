const express = require("express");

const {
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBook
} = require("../controllers/bookController");

const router = express.Router();

router.post("/books", addBook);
router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);
router.get("/books/search", searchBook);

module.exports = router;