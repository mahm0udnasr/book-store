import express from "express";
const router = express.Router();

// controller functions
import {
  getBooks,
  addBook,
  deleteBook,
} from "../controllers/booksControllers.js";

router.get("/", getBooks);
router.post("/", addBook);

router.delete("/:id", deleteBook);

export default router;
