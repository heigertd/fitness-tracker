const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter an exercise"
  },
//   type: {
//     type: String,
//     required: "Enter workout type"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   weight: {
//     type: Number,
//   },
//   sets: {
//     type: Number,
//   },
//   reps: {
//     type: Number,
//   },
//   duration: {
//     type: Number,
//     required: "Enter duration or distance"
//   },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;