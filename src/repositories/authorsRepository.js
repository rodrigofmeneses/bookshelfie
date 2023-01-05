import mongoose from "mongoose"
import Author from "../models/author.js"
import Book from "../models/book.js"

const AuthorRepository = {
    /**
     * Repository of author resource
     */

    async findAll() {
        try {
            return Author.find()
        } catch (error) {
            return error
        }
    },

    async findById(id) {
        try {
            return Author.findById(id)
        } catch (error) {
            return error
        }
    },

    async findBooksByAuthorId(id) {
        try {
            return Book.find({ 'author': mongoose.Types.ObjectId(id) }).populate('author')
        } catch (error) {
            return error
        }
    },

    async create(data) {
        try {
            return new Author(data).save()
        } catch (error) {
            return error
        }
    },

    async update(id, data) {
        try {
            return Author.findByIdAndUpdate(id, { $set: data }, { returnDocument: 'after' })
        } catch (error) {
            return error
        }
    },

    async delete(id) {
        try {
            return Author.findByIdAndDelete(id)
        } catch (error) {
            return error
        }
    }
}

export default AuthorRepository