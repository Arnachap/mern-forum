const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  forum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'forum'
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String,
    default: '/assets/profile-pictures/default.png'
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String,
        default: '/assets/profile-pictures/default.png'
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Topic = mongoose.model('topic', TopicSchema);
