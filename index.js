// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5100;

app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI);

const userRoutes = require("./routes/userRoutes")
app.use('/api/auth', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
