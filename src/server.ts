import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(routes)

app.listen(PORT, () => { })