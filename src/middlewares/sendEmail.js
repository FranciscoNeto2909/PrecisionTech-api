const nodeMailer = require("nodemailer")
const smtpConfig = require("../configs/smtp")

const transporter = nodeMailer.createTransport({
    service:smtpConfig.service,
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass
    }
})

module.exports = {
    async sendEmail(data) {
        try {
            transporter.sendMail({
                from: "PrecisionTech <precisiontech540@gmail.com>",
                to:data.email,
                subject:"Agendamento:",
                text:`Olá ${data.name}, seu agendamento do serviço de ${data.service} para o dia ${data.date} está confirmado, agradecemos a preferência`,
            })
                .then(msg => console.log("Sms sended with success!"))
                .catch(err => console.log("erro:" + err))
            return res.status(200).json("Sms sended with success!")
        } catch (error) {
            return res.status(400).json(error)
        }
    }

}