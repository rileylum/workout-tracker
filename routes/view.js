const router = require("express").Router();
const path = require("path");

router.use("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.use("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

module.exports = router;