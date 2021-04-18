const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
  id: {  type: String, required: true },
  expression: { type: String, required: "Sorry.Can't save an empty mood." },
});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;
