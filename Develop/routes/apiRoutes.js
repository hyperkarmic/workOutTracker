//Express imported - and models imported
const router = require("express");
const Workout = require("../models/workout");

//this retrieves last workout
app.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//this creates a new workout
app.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

app.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {
      $push: { exercises: body },
    },
    (error, data)
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

module.exports = router;
