const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const cors = require('cors')

const apiErrorHandler = require('./apiErrorHandler')
const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(expressValidator())
app.use(cors())

app.use(routes)

app.use(apiErrorHandler.notFound)
app.use(apiErrorHandler.invalidParameter)
app.use(apiErrorHandler.serverError)

module.exports = app
