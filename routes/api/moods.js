const router = require("express").Router();
const moodsController = require("../../controllers/moodsController");

// Matches with "/api/moods"
router.route("/")
  .get(moodsController.findAll)
  .post(moodsController.create);

// Matches with "/api/moods/:id"
router
  .route("/:id")
  .get(moodsController.findById)
  .put(moodsController.update)
  .delete(moodsController.remove);

module.exports = router;
