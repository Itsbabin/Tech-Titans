const mongoose = require('mongoose')
const { Schema } = mongoose;
    // this is a module of client and lawyer //
      // to creat a account they should fill this field //
const UserSchema = new Schema({
  name: {
    type : String,
    required : true,
  },
  email: {
    type : String,
    required : true,
    unique : true,
  },
  password: {
    type : String,
    required : true,
  },
  usertype: {
    type : String,
    required : true,
  },
  verified: {
    type : Boolean,
    default : false,
  },
  block: {
    type : [String],
  },
  date : {
    type : Date,
    default : Date.now,
  }

});
const User = mongoose.model('User', UserSchema);
User.createIndexes();
module.exports = User;