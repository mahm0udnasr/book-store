import express from "express";
const router = express.Router();

// controller functions
import { getBooks, addBook } from "../controllers/booksControllers.js";

router.get("/", getBooks);
router.post("/", addBook);

export default router;
