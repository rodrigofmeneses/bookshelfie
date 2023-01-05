# This is my BookShelfie!
---

![BookShelfie Logo](assets/bookshelfie-logo.jpg)

> RestFull API to manage your favorites books.

---
## Technologies used:

- Node.js
- Express
- MongoDB
---
## Configuration

After clone repository, install the dependencies.

```
npm install 
```

Create and configure `.env` file with this keys:

```js
MONGODB_URL="localhost:127017/bookshelfie" // your mongodb connection
PORT=1234 // 3000 by Default
```

---
## Usage
To run this application just type in root directory:

```
node run server.js
```

## Documentation

Schemas for bodies:

```json
Book:
{
  title: { type: String, required: true },
  author: { type: String, required: true },
  cover_url: { type: String },
  pageNumber: { type: Number }
}

Author:
{
  name: { type: String, required: true },
  nationality: { type: String }
}

```

Books endpoints

| Method | Endpoint    | Parameters | Body        | Description    |
| ------ | ----------- | ---------- | ----------- | -------------- |
| GET    | books/      | -          | -           | Get all books  |
| GET    | books/\<id> | Book id    | -           | Get book by id |
| POST   | books/      | -          | Book Schema | Create a book  |
| PUT    | books/\<id> | Book id    | Book Schema | Update book    |
| DELETE | books/\<id> | Book id    | Book Schema | Delete book    |


Authors endpoints

| Method | Endpoint            | Parameters | Body          | Description             |
| ------ | ------------------- | ---------- | ------------- | ----------------------- |
| GET    | authors/            | -          | -             | Get all authors         |
| GET    | authors/\<id>       | Author id  | -             | Get author by id        |
| GET    | authors/\<id>\books | Author id  | -             | Get all books of author |
| POST   | authors/            | -          | Author Schema | Create a author         |
| PUT    | authors/\<id>       | Author id  | Author Schema | Update author           |
| DELETE | authors/\<id>       | Author id  | Author Schema | Delete author           |

