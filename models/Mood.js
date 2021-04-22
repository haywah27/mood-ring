const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    user: { type: String },
    googleID: { type: String },
    expressions: { type: String },
});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;



