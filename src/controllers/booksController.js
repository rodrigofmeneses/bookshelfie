import books from "../models/book.js";

class BookController {
  /**
   * Controller of book resource
   */

  static getBooks = (_, res) => {
    books.find()
      .populate('author')
      .exec((err, books) => {
        res.status(200).json(books)
      })
  }

  static getBook = (req, res) => {
    const id = req.params.id;

    books.findById(id)
      .populate('author', 'name')
      .exec((err, books) => {
        if (err) {
          res.status(400).send({ message: `${err.message} - Id not found` });
        } else {
          res.status(200).json(books)
        }
      })
  }

  static addBook = (req, res) => {
    let book = new books(req.body);

    book.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Fail to add book` });
      } else {
        res.status(201).send(book.toJSON());
      }
    })
  }

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Book updated' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static removeBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(400).send({ message: err.message })
      }
      res.status(200).send({ message: 'Book removed' })
    })
  }

  static getBooksByTitle = (req, res) => {
    const title = req.query.title

    books.find({ 'title': title }, {}, (err, books) => {
      res.status(200).send(books)
    })
  }

}

export default BookController