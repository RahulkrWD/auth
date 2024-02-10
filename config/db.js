const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connected to mongodb on ${db.connection.host}`);
  } catch (err) {
    console.log("Error on mongodb connection", err);
  }
};

module.exports = connectDB;
