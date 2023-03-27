import { Book } from '../models/index.js'

const BookRepository = {
  /**
   * Controller of book resource
   */

  async findAll() {
    try {
      return Book.find().populate('author')
    } catch (error) {
      return error
    }
  },

  async findById(id) {
    try {
      return Book.findById(id).populate('author', 'name')
    } catch (error) {
      return error
    }
  },

  async create(data) {
    try {
      const book = new Book(data)
      return book.save()
    } catch (error) {
      return error
    }
  },

  async update(id, data) {
    try {
      return Book.findByIdAndUpdate(
        id,
        { $set: data },
        { returnDocument: 'after' }
      ).populate('author')
    } catch (error) {
      return error
    }
  },

  async delete(id) {
    try {
      return Book.findByIdAndDelete(id).populate('author')
    } catch (error) {
      return error
    }
  },
}

export default BookRepository
