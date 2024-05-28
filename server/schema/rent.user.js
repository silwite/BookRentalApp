import mongoose from 'mongoose';
const { Schema } = mongoose;

const rentSchema = new Schema({
nameUser:String,
rent:Number,
bookName:String,

});
const Rent = mongoose.model('rent', rentSchema);
export default Rent;