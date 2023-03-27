import BookRepository from '../repositories/book.js'

const BookService = {
  /**
   * Controller of book resource
   */

  async findAllBooks() {
    try {
      return BookRepository.findAll()
    } catch (error) {
      return error
    }
  },

  async findBookById(id) {
    try {
      // validation and sanityze user data
      return BookRepository.findById(id)
    } catch (error) {
      return error
    }
  },

  async addBook(body) {
    try {
      // validation and sanityze user data
      return BookRepository.create(body)
    } catch (error) {
      return error
    }
  },

  async updateBook(id, body) {
    try {
      // validation and sanityze user data
      return BookRepository.update(id, body)
    } catch (error) {
      return error
    }
  },

  async removeBook(id) {
    try {
      // validation and sanityze user data
      return BookRepository.delete(id)
    } catch (error) {
      return error
    }
  },
}

export default BookService
