const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://aimee_admin:AimeePW@reactmoodring.gzg5j.mongodb.net/Mood-ring", {useNewUrlParser: true}, {useUnifiedTechnology: true}) ;

const userSeed = [
  {
    user: "Hayley",
    googleId: "",
    expressions: [],
  },
  {
    user: "Billie",
    googleId: "",
    expressions: [],
  },
  {
    user: "Chloe",
    googleId: "",
    expressions: [],user
  },
];

db.Mood.remove({})
  .then(() => db.Mood.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });