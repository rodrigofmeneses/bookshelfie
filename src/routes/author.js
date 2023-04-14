import express from 'express'
import { AuthorController } from '../controllers/index.js'
const router = express.Router()

router
  .get('/authors', AuthorController.getAuthors)
  .get('/authors/:id', AuthorController.getAuthor)
  .get('/authors/:id/books', AuthorController.getBooksByAuthor)
  .post('/authors', AuthorController.addAuthor)
  .put('/authors/:id', AuthorController.updateAuthor)
  .delete('/authors/:id', AuthorController.removeAuthor)

export default router
