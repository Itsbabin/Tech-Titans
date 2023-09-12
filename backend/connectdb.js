const mongoose = require('mongoose')

const URL = "mongodb://0.0.0.0:27017/hackathon"
const connectToMongo = async ()=>{
 await mongoose.connect(URL);
  console.log("connected successfully")
}

module.exports = connectToMongo;