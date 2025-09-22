import express from "express";
const router = express.Router();

// controller functions
import { getBooks } from "../controllers/booksControllers.js";

router.get("/", getBooks);

export default router;
