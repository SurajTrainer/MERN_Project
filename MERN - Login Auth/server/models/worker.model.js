const mongoose = require('mongoose')

const workerScheme = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
})

const Worker = mongoose.model('Worker', workerScheme)

module.exports = Worker