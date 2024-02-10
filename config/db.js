// const mongoose = require("mongoose");
// const connectDB = async () => {
//   try {
//     const db = await mongoose.connect(process.env.);
//     console.log(`connected to mongodb on ${db.connection.host}`);
//   } catch (err) {
//     console.log("Error on mongodb connection", err);
//   }
// };

// module.exports = connectDB;
// config/db.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
