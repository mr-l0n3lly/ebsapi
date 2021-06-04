const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const dotenv = require('dotenv')

const productsRouter = require('./routes/productsRouter')

dotenv.config()

const app = express()

app.use(logger('dev'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/products', productsRouter)

app.use((err, res, req, next) => {
	// eslint-disable-next-line no-console
	console.log(err.stack)
	res.send(500).send('Something broke on server!')
})

module.exports = app