const router = require("express").Router();

const Scores = require("../database/models/scores.js");

// return one score
router.get("/api/score/:id", (req, res) => {
  console.log("Hey, JD! We got a request for this song:", req.params.id)
  Scores.find({"_id": req.params.id})
    .then(dbScores => {
      console.log("JD, I got the goods.");
      console.log("Take a look...", dbScores.length);
      res.json(dbScores);
    })
    .catch(err => {
      console.log("Uh oh, JD.  Deal with this:", err);
      res.status(400).json(err);
    });
})
// return all scores
router.get("/api/scores/all", (req, res) => {
  console.log("Hey, JD!  We got a request for our list of songs.");
  Scores.find({})
    .then(dbScores => {
      console.log("JD, I got the goods.");
      console.log("Take a look...", dbScores.length);
      res.json(dbScores);
    })
    .catch(err => {
      console.log("Uh oh, JD.  Deal with this:", err);
      res.status(400).json(err);
    });
});


module.exports = router;
