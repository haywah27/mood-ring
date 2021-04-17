const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MOOD-RING");

const moodSeed = [
  {
    title: "seed1",
    id: "",
    expression: "",
   
  },
  {
    title: "seed2",
    id: "",
    expression: "",
   
  },
  {
    title: "seed3",
    id: "",
    expression: "",
   
  },
  
  
];

db.Mood.remove({})
  .then(() => db.Mood.collection.insertMany(moodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
