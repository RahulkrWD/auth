// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");

app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

connectDB();

app.get("/", function (req, res) {
  res.send({ message: "welcome to my app" });
});
const userRoutes = require("./routes/userRoutes");
app.use("/auth", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
