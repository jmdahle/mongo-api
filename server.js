const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// protected local / development environment variables 
// in local ".env" file
// get appended to process.env
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(require("./routes/api.js"));



mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
