//dependencies imported
const router = require("express");
const path = require("path");

// get route for index
router.get("/", function (req, res) {
  response.sendFile(path.join(__dirname, "../public/index.html"));
});

//get route for exercise page
router.get("/exercise", function (req, res) {
  response.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//get route for statistics page
router.get("/stats", function (req, res) {
  response.sendFile(path.join(__dirname, "../public/stats.html"));
});

//router exported
module.exports = router;
