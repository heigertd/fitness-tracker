const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a workout"
  },
  type: {
    type: String,
    required: "Enter workout type"
  },
  date: {
    type: Date,
    default: Date.now
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
    required: "Enter duration or distance"
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;