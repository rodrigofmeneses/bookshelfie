import BookService from "../services/booksService.js"

const BookController = {
  /**
   * Controller of book resource
   */

  async getBooks(req, res) {
    try {
      const result = await BookService.findAllBooks()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ message: "Something Wrong" })
    }
  },

  async getBook(req, res) {
    const id = req.params.id
    try {
      const result = await BookService.findBookById(id)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({ message: `Book not found - ${error.message}` })
    }
  },

  async addBook(req, res) {
    try {
      const result = await BookService.addBook(req.body)
      res.status(201).json(result)
    } catch (error) {
      res.status(400).json({ message: `Error to add book - ${error.message}` })
    }
  },

  async updateBook(req, res) {
    try {
      const result = await BookService.updateBook(req.params.id, req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({ message: `Error to update book - ${error.message}` })
    }
  },

  async removeBook(req, res) {
    try {
      const result = await BookService.removeBook(req.params.id)
      if (!result) {
        res.status(404).json({ message: `Book not found` })
      }
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({ message: `Error to remove book - ${error.message}` })
    }
  }

}

export default BookController