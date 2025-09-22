import db from "../config/dbConnection.js";

export const getBooks = (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, data) => {
    if (err) {
      return res.status(404).json({ success: false, message: err });
    }
    return res.status(200).json({ success: true, data });
  });
};
