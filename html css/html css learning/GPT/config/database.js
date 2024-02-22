// const configuration = require("./configuration.js");

const mongoose = require("mongoose");


const MONGODB_URI = "mongodb://127.0.0.1:27017/openai";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (e) {
    console.log('err: ' + e);
  }
};

module.exports = connectDB;
