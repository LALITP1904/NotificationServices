const Notification = require('../models/Notification');
const User = require('../models/User');
const { sendNotification } = require('../services/notificationService');

// Create and send a notification
exports.createNotification = async (req, res) => {
  try {
    const { userId, type, content } = req.body;

    // Optional: Validate input here

    // Ensure user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create notification instance (not saved yet)
    const notification = new Notification({
      userId,
      type,
      content
    });

    // Send notification (updates status)
    await sendNotification(notification);

    // Save notification to DB
    await notification.save();

    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all notifications for a user
exports.getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;

    // Optional: Add filters (type, status, limit, etc.) as query params
    const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });

    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
