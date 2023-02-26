const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()



async function connectDb() {
 
  const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cyukvup.mongodb.net/test?retryWrites=true&w=majority`

  mongoose.connect(MONGO_URI, {useNewUrlParser: true})
  
  mongoose.connection.on("error", function(error) {
    console.log(error)
  })
  
  mongoose.connection.on("open", function() {
    console.log("Connected to shehab MongoDB database.")
  })
  
}

module.exports = connectDb;