const express = require("express");
const morgan = require("morgan")


const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);

// Define API routes here

app.use('/api', MoodsApiRoute);


app.use(MoodsApiRoute);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://aimee_admin:AimeePW@reactmoodring.gzg5j.mongodb.net/Mood-ring", {useNewUrlParser: true}, {useUnifiedTechnology: true}) ;

// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://aimee_admin:moodRingApp@reactmoodring.gzg5j.mongodb.net/moods", {useNewUrlParser: true}, {useUnifiedTechnology: true}) ;

// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://aimee_admin:moodRingApp@reactmoodring.gzg5j.mongodb.net/moods", {useNewUrlParser: true}, {useUnifiedTechnology: true}) ;



// mongodb+srv://aimee_admin:<password>@reactmoodring.gzg5j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


