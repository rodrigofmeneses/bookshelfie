import mongoose from "mongoose"
import authors from "../models/author.js"
import books from "../models/book.js"

const AuthorRepository = {
    /**
     * Repository of author resource
     */

    async findAll() {
        try {
            return authors.find()
        } catch (error) {
            return error
        }
    },

    async findById(id) {
        try {
            return authors.findById(id)
        } catch (error) {
            return error
        }
    },

    async findBooksByAuthorId(id) {
        try {
            return books.find({ 'author': mongoose.Types.ObjectId(id) }).populate('author')
        } catch (error) {
            return error
        }
    },

    async create(data) {
        try {
            return new authors(data).save()
        } catch (error) {
            return error
        }
    },

    async update(id, data) {
        try {
            return authors.findByIdAndUpdate(id, { $set: data }, { returnDocument: 'after' })
        } catch (error) {
            return error
        }
    },

    async delete(id) {
        try {
            return authors.findByIdAndDelete(id)
        } catch (error) {
            return error
        }
    }
}

export default AuthorRepository