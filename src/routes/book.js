import express from 'express'
import { BookController } from '../controllers/index.js'

const router = express.Router()

router
  .get('/books', BookController.getBooks)
  .get('/books/:id', BookController.getBook)
  .post('/books', BookController.addBook)
  .put('/books/:id', BookController.updateBook)
  .delete('/books/:id', BookController.removeBook)

export default router
