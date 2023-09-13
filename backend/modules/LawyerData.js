const mongoose = require('mongoose')
const { Schema } = mongoose;

const LawyerDataSchema = new Schema({
  client: {
    type : mongoose.Schema.Types.String,
    ref : 'User',
  },
  lawyer : {
    type : String,
    required : true,
  },
  status:{
    type : Boolean,
    required : true,
  },
  date : {
    type : Date,
    default : Date.now,
  }

});
const LawyerData = mongoose.model('LawyerData', LawyerDataSchema);
LawyerData.createIndexes();
module.exports = LawyerData;