const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    user: { type: String, unique: true},
    emotion: { type: String, required: "Cant save an empty mood" },
});


const Mood = mongoose.model('Mood', moodSchema);

module.exports = Mood;
