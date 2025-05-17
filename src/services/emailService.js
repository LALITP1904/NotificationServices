const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

const sendEmail = async (notification, user) => {
  const mailOptions = {
    from: `"Notification Service" <${process.env.EMAIL_FROM}>`,
    to: user.email,
    subject: notification.content.title,
    text: notification.content.body,
    html: `<p>${notification.content.body}</p>`
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
