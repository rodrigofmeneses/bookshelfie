import { BookService } from '../services/index.js'
import { NotFoundError } from '../errors/index.js'

const BookController = {
  /**
   * Controller of book resource
   */

  async getBooks(req, res, next) {
    const result = await BookService.findAllBooks()
    res.json(result)
  },

  async getBook(req, res) {
    const id = req.params.id
    const result = await BookService.findBookById(id)
    if (!result) {
      throw new NotFoundError('Book not found')
    }
    res.json(result)
  },

  async addBook(req, res) {
    const result = await BookService.addBook(req.body)
    res.status(201).json(result)
  },

  async updateBook(req, res) {
    const result = await BookService.updateBook(req.params.id, req.body)
    res.json(result)
  },

  async removeBook(req, res) {
    const result = await BookService.removeBook(req.params.id)
    if (!result) {
      throw new NotFoundError('Book not found')
    }
    res.json(result)
  },
}

export default BookController
