const Sequelize = require("sequelize")
const database = require("../configs/db")
const { scheduler } = require("timers/promises")

const Schedule = database.define("schedule", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    service: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    date: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
})

module.exports = Schedule