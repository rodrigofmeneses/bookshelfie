import AuthorService from "../services/authorsService.js"

const AuthorController = {
  /**
   * Controller for author resource
   */

  async getAuthors(req, res) {
    try {
      const result = await AuthorService.findAllAuthors()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ message: "Something Wrong" })
    }
  },

  async getAuthor(req, res) {
    const id = req.params.id
    try {
      const result = await AuthorService.findAuthorById(id)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({ message: `Author not found - ${error.message}` })
    }
  },

  async getBooksByAuthor(req, res) {
    const id = req.params.id
    try {
      const result = await AuthorService.findBooksByAuthorId(id)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({ message: `Author not found - ${error.message}` })
    }

  },

  async addAuthor(req, res) {
    const body = req.body
    try {
      const result = await AuthorService.addAuthor(body)
      res.status(201).json(result)
    } catch (error) {
      res.status(400).json({ message: `Error to add author - ${error.message}` })
    }
  },

  async updateAuthor(req, res) {
    const id = req.params.id
    const body = req.body
    try {
      const result = await AuthorService.updateAuthor(id, body)
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({ message: `Error to update author - ${error.message}` })
    }
  },

  async removeAuthor(req, res) {
    const id = req.params.id
    try {
      const result = await AuthorService.removeAuthor(id)
      if (!result) {
        res.status(404).json({ message: `Author not found` })
      }
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({ message: `Error to remove author - ${error.message}` })
    }
  }
}

export default AuthorController