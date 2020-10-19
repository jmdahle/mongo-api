const mongoose = require("mongoose");

const Schema = mongoose.Schema

const scoreSchema = new Schema ({
    name: String,
    beatsPerBar: Number,
    beatUnit: Number,
    numberMeasures: Number,
    song: [
        {
            time: String,
            note: String
        }
    ]
    },
    {
        toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
        }
    });

// adds a dynamically-created property to schema
scoreSchema.virtual("timeSignature")
    .get(function () {
    // use beatsPerBar and beatUnit to return a time signature (format used in tonejs format)
    // [3,4] is 3/4 time - "waltz"
    // [4,4] is 4/4 time - "common time"
    // https://tonejs.github.io/
    return [this.beatsPerBar.toString(),this.beatUnit.toString()];
  });
scoreSchema.virtual("totalMeasures").get(function() {
      // convert numberMeasures to format used in tonejs
      // adding "m", e.g., 10m is 10 measures, individually 0 through 9
      // https://tonejs.github.io/
      return `${this.numberMeasures.toString()}m`
  });

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;

/*
const score = {
    timeSignature: [3,4],
    totalMeasures: "9m",
    song: hbd
}
*/