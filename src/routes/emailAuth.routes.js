const express = require("express")
const { sendEmailEmail } = require("../middlewares/sendEmail")
const router = express.Router()

router.route("/")
.post(sendEmail)

module.exports = router