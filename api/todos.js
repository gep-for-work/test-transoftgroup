const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = require('express')()
const axios = require('axios')

require('dotenv').config({ path: path.resolve(process.cwd(), '.env') })

app.use(bodyParser.json({ limit: '1mb' }))

const router = express.Router()
const prefix = '/api'
app.use(prefix, router)

router.get('/todos', (req, res) => {
  axios
    .get(`${process.env.API_URL}/todos`)
    .then((response) => {
      res.status(response.status).json(response.data)
    })
    .catch((error) => {
      res.status(error.response.status).json({ message: error.response.data })
    })
})

module.exports = app
