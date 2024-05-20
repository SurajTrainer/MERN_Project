import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name : String,
    price : Number,
    title : String,
    category : String,
    image : String,
})

const Product = mongoose.model('Product', productSchema)

export default Product