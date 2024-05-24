const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Worker = require('./models/worker.model.js')

const app = express()
app.use(express.json())
app.use(cors())


// connecting mongoose..
mongoose.connect('mongodb://localhost:27017/worker');

app.get('/' , (req , res) => {
    res.send('Hello Mr..')
})

app.post('/login' , (req , res) => {
    const {email , password} = req.body;
    Worker.findOne({email})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json('success')
            }else{
                res.json('password not matched.')
            }
        }else{
            res.json('No User found..')
        }
    })
})

app.post('/signup', (req, res) => {
    Worker.create(req.body)
    .then(worker => res.json(worker))
    .catch(err => res.json(err))
})

app.listen(3001 , () => {
    console.log('server is running perfectly..')
})