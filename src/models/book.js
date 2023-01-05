import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
  {
    id: { type: String },
    title: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'authors',
      required: true
    },
    cover_url: { type: String },
    pageNumber: { type: Number }
  },
  {
    versionKey: false
  }
)

const Book = mongoose.model('books', bookSchema)

export default Book