import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
name:String,
rent:Number,
description:String,
price:Number,
imgsrc:String

});
const Blog = mongoose.model('Blog', bookSchema);
export default Blog;