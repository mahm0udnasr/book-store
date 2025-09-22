import db from "../config/dbConnection.js";

export const getBooks = (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: err });
    }
    return res.status(200).json({ success: true, data });
  });
};

export const addBook = (req, res) => {
  const { title, description, cover } = req.body;
  if (!title || !description || !cover) {
    return res
      .status(400)
      .json({ success: false, message: "fill all data first" });
  }
  const query = "INSERT INTO books (`title`,`description`,`cover`) VALUES (?)";
  const values = [title, description, cover];
  db.query(query, [values], (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: err });
    }
    return res.status(201).json({
      success: true,
      message: "Book added successfully",
      bookId: data.insertId,
    });
  });
};

/*
+   const query = `UPDATE books SET ${fields.join(", ")} WHERE id = ?`;
+   values.push(id);
*/

export const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, description, cover } = req.body;

  const fields = [];
  const values = [];
  
  if (title !== undefined) {
    fields.push("title = ?");
    values.push(title);
  }
  if (description !== undefined) {
    fields.push("description = ?");
    values.push(description);
  }
  if (cover !== undefined) {
    fields.push("cover = ?");
    values.push(cover);
  }
  if (fields.length === 0) {
    return res.status(400).json({ success: false, message: "fill data first" });
  }

  const query = `UPDATE books SET ${fields.join(", ")} WHERE id = ?`;
  values.push(id);
  db.query(query, values, (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: err });
    }
    if (data.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Book updated successfully" });
  });
};

export const deleteBook = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM books WHERE id = ?";
  db.query(query, [id], (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: err });
    }
    if (data.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Book deleted successfully" });
  });
};
