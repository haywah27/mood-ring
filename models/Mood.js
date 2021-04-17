const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    id:  { required: id.name, type: String, unique: true},
    expression: { type: String, required: "Can't save an empty mood." },
   
});


const Mood = mongoose.model('Mood', moodSchema);

module.exports = Mood;








