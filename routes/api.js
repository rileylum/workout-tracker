const router = require("express").Router();
// GET WORKOUTS
router.get("/workouts", (req, res) => {
    res.send("hello!");
});
// ADD EXERCISE TO CURRENT WORKOUT
router.put("/workouts", (req, res) => {
    res.send("hello");
})
// CREATE NEW WORKOUT
router.post("/workouts", (req, res) => {
    res.send("hello");
})
// GET WORKOUTS FROM LAST 7 DAYS
router.get("/workouts/range", (req, res) => {
    res.send("hello");
})

module.exports = router;