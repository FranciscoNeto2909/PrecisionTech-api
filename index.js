const cors = require("cors")
const express = require("express")
const sequelize = require("./configs/db")
const scheduleRoutes = require("./routes/schedules.routes")
const app = express()
const port = process.env.PORT || "3001"

sequelize.sync().then(() => console.log("Database conected successfully..."))
app.use(express.json())
app.use(cors())

app.listen(port, console.log("executando..."))
app.use("/schedules", scheduleRoutes)
