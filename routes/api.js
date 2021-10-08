const router = require("express").Router();
const Workout = require("../models/workout");

// GET WORKOUTS
router.get("/workouts", (req, res) => {
    Workout.aggregate([{
        // sum the duration of all exercises and add a field totalDuration
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
        }
    },
    {
        // sort oldest to newest
        $sort: {day: 1}
    }])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
    
});
// ADD EXERCISE TO CURRENT WORKOUT
router.put("/workouts/:id", (req, res) => {
    Workout.updateOne(
        { _id: req.params.id },
        { $push: {exercises: req.body}},
        {new: true}
    ).
    then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})
// CREATE NEW WORKOUT
router.post("/workouts", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    })
})
// GET LAST 7 WORKOUTS
router.get("/workouts/range", (req, res) => {

    Workout.aggregate([{
        // sum the duration of all exercises and add a field totalDuration
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
        }
    },
    {
        // sort oldest to newest
        $sort: {day: 1}
    }])
    .then(dbWorkout => {
        res.json(dbWorkout.slice(dbWorkout.length-7));
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;