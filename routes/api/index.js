const router = require("express").Router();
const moodRoutes = require("./mood");

// Post routes
router.use("/mood", moodRoutes);

module.exports = router;
