import express from "express";
import authors from "./authorsRoutes.js";
import books from "./booksRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Node Course');
    })

    app.use(express.json())
    app.use('/books', books)
    app.use('/authors/', authors)
}

export default routes;