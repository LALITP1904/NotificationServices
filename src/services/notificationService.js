const User = require('../models/User');
const sendEmail = require('./emailService');
const sendSMS = require('./smsService');

exports.sendNotification = async (notification) => {
  // Fetch user info
  const user = await User.findById(notification.userId);
  if (!user) throw new Error('User not found');

  try {
    if (notification.type === 'email') {
      await sendEmail(notification, user);
      notification.status = 'sent';
    } else if (notification.type === 'sms') {
      await sendSMS(notification, user);
      notification.status = 'sent';
    } else if (notification.type === 'in-app') {
      // In-app: just mark as sent (could be extended to push to a websocket, etc.)
      notification.status = 'sent';
    } else {
      throw new Error('Invalid notification type');
    }
  } catch (err) {
    notification.status = 'failed';
    throw err;
  }
};
