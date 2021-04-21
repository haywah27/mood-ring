const Router = require("express").Router();
const Mood = require("../models/Mood");

Router.get("/", async (req, res) => {
    try {
        console.log("all users please");
        const moods = await Mood.find();
        res.json(moods);
    } catch (err) {
        res.status(501);
        console.log("error in the moods get route: ", err);
        res.send("unexpected server error when getting moods!");
    }
});

Router.post("/api/moods", async (req, res) => {
    try {
        console.log("we got a mood with: ", req.body);
        const mood = await Mood.create({body: req.body});
        res.status(201);
        res.send(mood);
    } catch (err) {
        res.status(501);
        console.log("error in the notes post route: ", err);
        res.send("unexpected server error when posting a note!");
    }
});


module.exports = Router;
