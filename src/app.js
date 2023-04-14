import 'async-middleware'
import express from 'express'
import db from './config/database.js'
import routes from './routes/index.js'
import { errorHandler, pageNotFoundHandler } from './middlewares/index.js'

db.on('error', console.log.bind(console, 'Connection Error'))
db.once('open', () => console.log('Successful Connection'))

const app = express()

app.use(express.json())

routes(app)
app.use(pageNotFoundHandler)

app.use(errorHandler)

export default app
