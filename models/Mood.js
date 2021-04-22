const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
<<<<<<< HEAD
  id: {  type: String, required: true },
  expression: { type: String, required: "Sorry.Can't save an empty mood." },
=======
    user: { type: String },
    googleID: { type: String },
    expressions: { type: String },
>>>>>>> f5c1cfce4ab3d9d7dc1eca896f245c327680b307
});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;



