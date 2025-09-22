import express from "express";
const router = express.Router();

// controller functions
import {
  getBooks,
  addBook,
  deleteBook,
  updateBook,
} from "../controllers/booksControllers.js";

router.get("/", getBooks);
router.post("/", addBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
