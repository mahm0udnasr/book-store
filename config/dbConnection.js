import { configDotenv } from "dotenv";
configDotenv();
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "book_store",
});

export default db;
