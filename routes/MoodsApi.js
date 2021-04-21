const Router = require("express").Router();
const db = require("../models");

Router.post("/api/moods", async (req, res) => {
    db.Mood.find({
        user: { $regex: new RegExp(req.query.q, 'i')}
      })
        .then(moods => res.json(moods))
        .catch(err => res.status(422).end());
});

Router.post("/api/moods", async (req, res) => {
  db.Mood.find({
      user: { $regex: new RegExp(req.query.q, 'i')}
    })
      .then(moods => res.json(moods))
      .catch(err => res.status(422).end());
});

module.exports = Router;
