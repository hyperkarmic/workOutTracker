//import mongoose
const mongoose = require("mongoose");

//set up schema
const Schema = mongoose.Schema;

//create a new schema for 'workout', and set up day/exercises/name/duration/weight/reps and distance

const workOutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "please type of exercise",
        },
        name: {
          type: String,
          trim: true,
          required: "Please Input Exercise Name",
        },
        duration: {
          type: Number,
          required: "Please enter length of exercise session in minutes",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  //the below allows virtual properties of requested data
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//this adds a dynamically created 'totalDuration' section to schema

workOutSchema.virtual("totalDuration").get(function () {
  //the total amount of time doing a particular exercise is condensed (from array) and returned.
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

//model saved to variable and exported
const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
