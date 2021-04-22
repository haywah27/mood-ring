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

<<<<<<< HEAD
// Add routes, both API and view
app.use(routes);
=======
// Define API routes here
app.use('/api', MoodsApiRoute);
>>>>>>> f5c1cfce4ab3d9d7dc1eca896f245c327680b307

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mood-ring");
=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/moods");
>>>>>>> f5c1cfce4ab3d9d7dc1eca896f245c327680b307

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
