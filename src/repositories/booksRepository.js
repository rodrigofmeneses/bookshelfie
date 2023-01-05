import books from "../models/book.js"

const BookRepository = {
  /**
   * Controller of book resource
   */

  async findAll() {
    try {
      // const result = await books.find().populate("author")
      return books.find().populate("author")
    } catch (error) {
      return error
    }
  },

  async findById(id) {
    try {
      return books.findById(id).populate('author', 'name')
    } catch (error) {
      return error
    }
  },

  async create(data) {
    try {
      const book = new books(data)
      return book.save()
    } catch (error) {
      return error
    }
  },

  async update(id, data) {
    try {
      return books.findByIdAndUpdate(id, { $set: data }, { returnDocument: 'after' }).populate('author')
    } catch (error) {
      return error
    }
  },

  async delete(id) {
    try {
      return books.findByIdAndDelete(id).populate('author')
    } catch (error) {
      return error
    }
  }
}

export default BookRepository