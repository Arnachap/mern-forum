const express = require('express');
const router = express.Router();

const Forum = require('../../models/Forum');
const Section = require('../../models/Section');

// @route    POST api/forums/sections
// @desc     Create a forum section
// @access   Public (will change)
router.post('/sections', async (req, res) => {
  try {
    const newSection = new Section({
      title: req.body.title
    });

    const section = await newSection.save();

    res.json(section);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/forums
// @desc     Create a forum
// @access   Public (will change)
router.post('/', async (req, res) => {
  try {
    const newForum = new Forum({
      section: req.body.section,
      title: req.body.title,
      description: req.body.description
    });

    const forum = await newForum.save();

    res.json(forum);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/forums/sections
// @desc     Get all sections
// @access   Public
router.get('/sections', async (req, res) => {
  try {
    const sections = await Section.find();

    res.json(sections);
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

// @route    GET api/forums/:id
// @desc     Get forum by ID
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);

    res.json(forum);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
