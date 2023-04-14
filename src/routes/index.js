import express from 'express'
import authors from './author.js'
import books from './book.js'

const routes = (app) => {
  app.use(express.json())
  app.use('/api/v1', books, authors)
}

export default routes
