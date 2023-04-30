import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import api from './api'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hi there! Use /api for API requests.')
})

app.use('/api', api)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
