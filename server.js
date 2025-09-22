
import express from "express";
const app = express();

// routes
import router from "./routes/booksRoute.js";

app.use("/books", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server connected on http://localhost:${PORT}`);
});
