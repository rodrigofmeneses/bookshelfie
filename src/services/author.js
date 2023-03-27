import { AuthorRepository } from '../repositories/index.js'

const AuthorService = {
  /**
   * Service of author resource
   */

  async findAllAuthors() {
    try {
      return AuthorRepository.findAll()
    } catch (error) {
      return error
    }
  },

  async findAuthorById(id) {
    try {
      // validation and sanitize user data
      return AuthorRepository.findById(id)
    } catch (error) {
      return error
    }
  },

  async findBooksByAuthorId(id) {
    try {
      return AuthorRepository.findBooksByAuthorId(id)
    } catch (error) {
      return error
    }
  },

  async addAuthor(body) {
    try {
      // validation and sanitize user data
      return AuthorRepository.create(body)
    } catch (error) {
      return error
    }
  },

  async updateAuthor(id, body) {
    try {
      // validation and sanitize user data
      return AuthorRepository.update(id, body)
    } catch (error) {
      return error
    }
  },

  async removeAuthor(id) {
    try {
      // validation and sanitize user data
      return AuthorRepository.delete(id)
    } catch (error) {
      return error
    }
  },
}

export default AuthorService
