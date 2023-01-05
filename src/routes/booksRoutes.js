import express from "express"
import BookController from "../controllers/booksController.js"

const router = express.Router()

router
  .get("", BookController.getBooks)
  .get("/:id", BookController.getBook)
  .post("", BookController.addBook)
  .put("/:id", BookController.updateBook)
  .delete("/:id", BookController.removeBook)

export default router
