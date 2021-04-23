const Router = require("express").Router();
const db = require("../models");

// Router.post("/api/moods", async (req, res) => {
//     db.Mood.find({
//         user: { $regex: new RegExp(req.query.q, 'i')}
//       })
//         .then(moods => res.json(moods))
//         .catch(err => res.status(422).end());
// });

// Router.post("/api/moods", async (req, res) => {
//   db.Mood.find({
//       user: { $regex: new RegExp(req.query.q, 'i')}
//     })
//       .then(moods => res.json(moods))
//       .catch(err => res.status(422).end());
// });


Router.get('/api/user/:googleId', async (req, res) => {
  // Grab req parameter
  const googleId = req.params.googleId
  db.Mood.find({googleId: googleId })
    .then(mood => res.json(mood))
    .catch(err => res.status(422).end());
})

Router.post('/api/mood', async (req, res) => {
  // Grab info
  const googleId = req.body.googleId;
  const name = req.body.name;
  const expressions = req.body.expressions;
  console.log(req.body)
  db.Mood.create({
    name,
    googleId,
    expressions
  })
  .then(mood => res.json(mood))
  .catch(err => {
    console.log(err);
    res.status(422).end()
  });
})

module.exports = Router;
