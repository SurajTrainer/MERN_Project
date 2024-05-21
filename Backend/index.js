import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import productStore from './route/product.route.js'
import cors from 'cors'
import userRouter from './route/user.route.js'


const app = express()

const port = process.env.PORT || 5000
const URI = process.env.MONGODB_URI


app.use(cors());
// for parse data in json form
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`<h1>Hello Mr. Suraj Singh Bisht</h1>`)
})


// connect to mongoDB

try {
    mongoose.connect(URI,
    //    {
    //   useNewUrlParser : true,
    //   useUnifiedTopology : true
    // }
  )
    console.log('mongoose connected successfully...');
} catch (error) {
    console.log('error is : ' , error);
}


  // calling routes
app.use('/product', productStore)
app.use('/user', userRouter) 

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
