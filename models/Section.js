const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = Section = mongoose.model('section', SectionSchema);
