import authors from "../models/author.js"

class AuthorController {
  /**
   * Controller for author resource
   */

  static getAuthors = (_, res) => {
    authors.find((err, result) => {
      res.status(200).json(result)
    })
  }

  static getAuthor = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id not found` });
      } else {
        res.status(200).json(authors)
      }
    })
  }

  static addAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Fail to add author` });
      } else {
        res.status(201).send(author.toJSON());
      }
    })
  }

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Author updated' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static removeAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(400).send({ message: err.message })
      }
      res.status(200).send({ message: 'Author removed' })
    })
  }

}

export default AuthorController