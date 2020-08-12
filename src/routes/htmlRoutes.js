//dependencies imported
const router = require("express").Router();
const path = require("path");

//get route for exercise page
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//get route for statistics page
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//router exported
module.exports = router;
