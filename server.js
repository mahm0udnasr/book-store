import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
import router from "./routes/booksRoute.js";

app.use("/books", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server connected on http://localhost:${PORT}`);
});
