const cors = require("cors")
const express = require("express")
const sequelize = require("./configs/db")
const schedulesRoutes = require("./routes/schedules.routes")
const app = express()
const port = process.env.PORT || "3001"

sequelize.sync().then(() => console.log("Database conected successfully..."))
app.use(express.json())
app.use(cors())
app.use("/schedules", schedulesRoutes)
app.listen(port, console.log("executando..."))
