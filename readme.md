# Book Store API

A simple RESTful API for managing books using Node.js, Express, and MySQL.

## Technologies Used

- Node.js
- Express.js
- MySQL
- dotenv

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/mahm0udnasr/book-store.git
cd book-store
```

2. Install dependencies:

```bash
npm install
```

3. Create a MySQL database named `book_store`

4. Create a `.env` file in the root directory and add your MySQL password:

```env
MYSQL_PASSWORD=your_password
```

5. Run the server:

```bash
npm run dev    # for development with nodemon
npm start      # for production
```

The server will start on `http://localhost:3000`

## API Endpoints

### Books

| Method | Endpoint   | Description    | Request Body                                  |
| ------ | ---------- | -------------- | --------------------------------------------- |
| GET    | /books     | Get all books  | -                                             |
| POST   | /books     | Add a new book | `{ title, description, cover }`               |
| PATCH  | /books/:id | Update a book  | `{ title?, description?, cover? }` (optional) |
| DELETE | /books/:id | Delete a book  | -                                             |

### Request Body Example

```json
{
  "title": "Book Title",
  "description": "Book Description",
  "cover": "Cover URL"
}
```

## Response Format

Success Response:

```json
{
  "success": true,
  "data": [...] // or message for non-GET requests
}
```

Error Response:

```json
{
  "success": false,
  "message": "Error message"
}
```

## License

[MIT License](LICENSE)

## Reach me

Telegram: [@mahm0udnasr](https://t.me/mahm0udnasr)
Email: contact.mahmoudnasr@gmail.com
