const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  type: {
    type: String,
    enum: ['email', 'sms', 'in-app'],
    required: true
  },
  content: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    enum: ['queued', 'sent', 'delivered', 'failed'],
    default: 'queued'
  }
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
