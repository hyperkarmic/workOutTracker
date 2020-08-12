const router = require("express").Router();
const Workout = require("../models/workout");

//this retrieves last workout
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//range function route
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(5)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//this creates a new workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, {
    $push: { exercises: body },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

module.exports = router;
