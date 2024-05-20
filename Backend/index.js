import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()

const port = process.env.PORT || 5000
const URI = process.env.MONGODB_URI



app.get('/', (req, res) => {
  res.send(`<h1>Hello Mr. Suraj Singh Bisht</h1>`)
})


// connect to mongoDB

try {
    mongoose.connect(URI, {
      useNewUrlParser : true,
      useUnifiedTopology : true
    } )
} catch (error) {
  
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
