import express from 'express'
import authors from './author.js'
import books from './book.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send('Bookshelfie')
  })

  app.use(express.json())
  app.use('/books', books)
  app.use('/authors', authors)
}

export default routes
