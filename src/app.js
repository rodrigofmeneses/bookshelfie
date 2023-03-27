import express from 'express'
import db from './config/database.js'
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Connection Error'))
db.once('open', () => console.log('Successful Connection'))

const app = express()

routes(app)

export default app
