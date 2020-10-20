const mongoose = require("mongoose");
const Scores = require("./models/scores");

// protected local / development environment variables 
// in local ".env" file
// get appended to process.env
const dotenv = require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  });


let scoreSeeds = [
    {
        name: "Josh's Song",
        beatsPerBar: 3,
        beatUnit: 4,
        numberMeasures: 9,
        song: [
            {time: "0:2", note: "C4"},
            {time: "0:2:3", note: "C4"},
            {time: "1:0", note: "D4"},
            {time: "1:1", note: "C4"},
            {time: "1:2", note: "F4"},
            {time: "2:0", note: "E4"},
            {time: "2:2", note: "C4"},
            {time: "2:2:3", note: "C4"},
            {time: "3:0", note: "D4"},
            {time: "3:1", note: "C4"},
            {time: "3:2", note: "G4"},
            {time: "4:0", note: "F4"},
            {time: "4:2", note: "C4"},
            {time: "4:2:3", note: "C4"},
            {time: "5:0", note: "C5"},
            {time: "5:1", note: "A4"},
            {time: "5:2", note: "F4"},
            {time: "6:0", note: "E4"},
            {time: "6:1", note: "D4"},
            {time: "6:2", note: "A#4"},
            {time: "6:2:3", note: "A#4"},
            {time: "7:0", note: "A4"},
            {time: "7:1", note: "F4"},
            {time: "7:2", note: "G4"},
            {time: "8:0", note: "F4"}
        ]
    },
    {
      name: "Famous Four Notes",
      beatsPerBar: 2,
      beatUnit: 4,
      numberMeasures: 2,
      song: [
        {time: "0:0:3", note: "G3"},
        {time: "0:1:0", note: "G3"},
        {time: "0:1:1", note: "G3"},
        {time: "1:0:0", note: "F#3"}
      ]
    }
];

Scores.deleteMany({})
  .then(() => Scores.collection.insertMany(scoreSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
