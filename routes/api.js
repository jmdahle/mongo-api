const router = require("express").Router();

const Scores = require("../database/models/scores.js");

// return all scores
router.get("/api/scores/all", (req, res) => {
  console.log("Hey, JD!  We got a request for our list of songs.");
  Scores.find({})
    .then(dbScores => {
      console.log("JD, I got the goods.");
      // console.log("Take a look...", dbScores);
      res.json(dbScores);
    })
    .catch(err => {
      console.log("Uh oh, JD.  Deal with this:", err);
      res.status(400).json(err);
    });
});

router.get("*", (req, res) => {
  res.status(404).send('no routing');
});

module.exports = router;
