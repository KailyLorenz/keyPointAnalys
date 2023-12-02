const nodemailer = require('nodemailer')
const pug = require('pug')
const htmlToText = require('html-to-text')

module.exports = class Email {
    constructor(user) {
        this.to = user.email;
        this.from = process.env.EMAIL_FROM;
        this.firstName = user.name.split(' ')[0];
        this.message = user.message;
        this.subject = user.subject;
    }

    newTransport() {
        if(process.env.NODE_ENV === 'production') {
            return nodemailer.createTransport({
                host: "smtp-relay.brevo.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                     user: 'kaily.lorenz@gmail.com',
                     pass: 'xsmtpsib-b0a62ffe02d04b2e651debf35edad198f0ae7f123cc8f467965d867bf00b25f8-b1qd9wEcxLO0fMK6'
                },
            });

        }
        return nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        })
    }
    // send the actual email
    async send(template, subject, admin = false) {
        // 1  render HTML based on a pug template
        const html = pug.renderFile(`${__dirname}/views/email/${template}.pug`, {
            firstName: this.firstName,
            message: this.message,
            subject: this.subject
        })
        console.log('firstName', this.firstName)
        //2 Define email options
        const text = htmlToText.convert(html)
        let mailOptions
        if (!admin) {
             mailOptions = {
                from: 'kpd.service@gmail.com',
                to: this.to,
                subject,
                text,
                html
            }
        }else {
            mailOptions = {
                from: 'kpd.service@gmail.com',
                to: 'Artem.ovtsyn@gmail.com',
                subject: this.subject,
                text: this.message,
                html
            }
        }

        await this.newTransport().sendMail(mailOptions )
    }

    async sendContactMe() {
        await this.send('baseEmail', 'welcome to KPD')
    }

    async sendContactToAdmin() {
        await this.send('baseEmailAdmin', 'from KPD', true)
    }

}
