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

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// routes
// app.use(require("./routes/api.js"));
const Scores = require("../database/models/scores.js");

// return all scores
router.get("/api/scores/all", (req, res) => {
  console.log("Hey, JD!  We got a request for our list of songs.");
  Scores.find({})
    .then(dbScores => {
      // console.log("JD, I got the goods.");
      // console.log("Take a look...", dbScores.length);
      res.json(dbScores);
    })
    .catch(err => {
      // console.log("Uh oh, JD.  Deal with this:", err);
      res.status(400).json(err);
    });
});



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
