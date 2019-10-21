const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Topic = require('../../models/Topic');
const User = require('../../models/User');
const Forum = require('../../models/Forum');

// @route    POST api/topics/:forum_id
// @desc     Create a topic with forum ID
// @access   Public (Will change)
router.post('/:forum_id', auth, async (req, res) => {
  // TODO check if empty inputs
  try {
    const user = await User.findById(req.user.id).select('-password');
    const forum = await Forum.findById(req.params.forum_id);

    const newTopic = new Topic({
      title: req.body.title,
      text: req.body.text,
      forum: forum.id,
      name: user.name,
      user: req.user.id
    });

    const topic = await newTopic.save();

    res.json(topic);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/topics/:forum_id
// @desc     Get all topics by forum ID
// @access   Public
router.get('/:forum_id', async (req, res) => {
  try {
    const topics = await Topic.find({ forum: req.params.forum_id });

    res.json(topics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
