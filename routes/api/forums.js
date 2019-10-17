const express = require('express');
const router = express.Router();

const Forum = require('../../models/Forum');

// @route    POST api/forums
// @desc     Create a forum
// @access   Public (will change)
router.post('/', async (req, res) => {
  try {
    const newForum = new Forum({
      title: req.body.title
    });

    const forum = await newForum.save();

    res.json(forum);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/forums/:id
// @desc     Create a subforum
// @access   Public (will change)
router.post('/:id', async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);

    const newSubforum = {
      title: req.body.title,
      description: req.body.description
    };

    forum.subforums.unshift(newSubforum);

    await forum.save();

    res.json(forum);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/forums
// @desc     Get all forums
// @access   Public
router.get('/', async (req, res) => {
  try {
    const forums = await Forum.find();
    res.json(forums);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
