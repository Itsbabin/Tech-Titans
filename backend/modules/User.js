import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type : String,
    required : true,
  },
  email: {
    type : String,
    required : true,
  },
  date : {
    type : Date,
    default : Date.now,
  }

});
module.exports = mongoose.module('user', UserSchema);