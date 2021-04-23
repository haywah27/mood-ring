const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    name: { type: String },
    googleId: { type: String },
    expressions: { type: Array },
});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;



