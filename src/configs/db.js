const Sequelize = require("sequelize")

const sequelize = new Sequelize("precisiontech", "shark", "sh4rk", {
    dialect: "sqlite",
    host: "./dev.sqlite"
})

module.exports = sequelize;