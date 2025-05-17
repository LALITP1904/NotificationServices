const twilio = require('twilio');
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendSMS = async (notification, user) => {
  return client.messages.create({
    body: `${notification.content.title}\n${notification.content.body}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: user.phoneNumber
  });
};

module.exports = sendSMS;
