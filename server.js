const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).catch(err => {
    console.error(`db connect unsuccessful`)
});
const connection = mongoose.connection
connection.once('open', () => {
    console.log(`db connected`)
})


const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.use('/', (req, res) => {
    res.send('teacher info db')
})


app.listen(port, () => {
    console.log(`server running on ${port}`)
})