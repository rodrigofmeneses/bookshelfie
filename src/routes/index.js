import express from "express";
import authors from "./authorsRoutes.js";
import books from "./booksRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Node Course');
    })

    app.use(
        express.json(),
        books,
        authors
    )
}

export default routes;