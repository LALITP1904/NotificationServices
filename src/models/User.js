const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  name: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
