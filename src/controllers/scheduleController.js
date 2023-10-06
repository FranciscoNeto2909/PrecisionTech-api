const Schedule = require("../models/schedule")
const { sendEmail } = require("../middlewares/sendEmail")



module.exports = {
    async all(req, res) {
        try {
            const schedules = await Schedule.findAll()
            res.status(200).json(schedules)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async create(req, res) {
        try {
            const schedule = req.body
            const name = req.body.name
            const clientExist = await Schedule.findOne({ where: { name } })

            if (clientExist) {
                return res.status(400).json("Erro: Schedule has alredy been made")
            }
            await Schedule.create(schedule)
            await sendEmail(schedule)

            return res.status(200).json("Schedule creation successfully!")
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    async delete(req, res) {
        try {
            const id = req.params.id
            const schedule = await Schedule.findOne({ where: { id } })

            if (!schedule) {
                return res.status(400).json("Erro: schedule not found!")
            }
            else {
                await schedule.destroy()
                res.status(201).json("Schedule removed!")
            }

        } catch (error) {
            res.status(400).send(error)
        }
    }
}