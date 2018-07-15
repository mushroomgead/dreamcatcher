const express = require('express')
const mongoose = require('mongoose')
require('./models/dreamListModel')
const bodyParser = require('body-parser')
const app = express()

// mongooseinstance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/DreamCatcherdb', { useNewUrlParser: true })

port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// importing route
let routes = require('./routes/index')

// register the route
routes(app)

app.listen(port, () => console.log('dreamcatcher RESTFUL API server started on: ' + port));
