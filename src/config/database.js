import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

let db = mongoose.connection

export default db
