const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// POST /notifications
router.post('/', notificationController.createNotification);

// GET /notifications/user/:userId
router.get('/user/:userId', notificationController.getUserNotifications);

module.exports = router;
