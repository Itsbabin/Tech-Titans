const mongoose = require('mongoose')
const { Schema } = mongoose;

const DataUser1Schema = new Schema({
  name: {
    type : mongoose.Schema.Types.String,
    ref : 'User',
  },
  email: {
    type : mongoose.Schema.Types.String,
    ref : 'User',
  },
  lawyer : {
    type : String,
    required : true,
  },
  type: {
    type : String,
    required : true,
  },
  address: {
    type : String,
    required : true,
  },
  court: {
    type : String,
    required : true,
  },
  section: {
    type : String,
  },
  hearing: {
    type : String,
  },
  description : {
    type : String,
    required : true,
  },
  date : {
    type : Date,
    default : Date.now,
  }

});
const DataUser1 = mongoose.model('DataUser1', DataUser1Schema);
DataUser1.createIndexes();
module.exports = DataUser1;