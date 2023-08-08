const nodemailer = require('nodemailer')
require("dotenv").config()

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: "valscotech@gmail.com",
        pass: "yrmquydrbslmdhrx"
    },
    pool: true
});

module.exports = transporter;