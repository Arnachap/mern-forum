const mongoose = require('mongoose');

const ForumSchema = new mongoose.Schema({
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'section'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Forum = mongoose.model('forum', ForumSchema);
