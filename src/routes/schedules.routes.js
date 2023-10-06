const express = require("express")
const Schedule = require("../controllers/scheduleController")
const router = express.Router()

router.route("/")
    .get(Schedule.all)
    .post(Schedule.create)
router.route("/:id")
    .delete(Schedule.delete)

module.exports = router