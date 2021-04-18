const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MOOD");

const moodSeed = [
  {
    title: "seed1",
    id: "ID number 1",
    expression: "",
   
  },
  {
    title: "ID number 2",
    id: "",
    expression: "",
   
  },
  {
    title: "ID number 3",
    id: "",
    expression: "",
   
  },
  
  
];

db.Mood
.remove({})
  .then(() => db.Mood.collection.insertMany(moodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
