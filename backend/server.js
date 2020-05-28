const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
var publicDir = require('path').join(__dirname, '/photos');

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(publicDir));
app.use(cors())
app.use(express.json())
app.use(fileUpload())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log('mongo konekcija ok')
})

const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')
const categoryRouter = require('./routes/categories')

app.use('/posts', postsRouter)
app.use('/users', usersRouter)
app.use('/categories', categoryRouter)

app.listen(port, () => {
    console.log(`port je ${port}`)
})