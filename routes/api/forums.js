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

// @route    GET api/posts
// @desc     Get all posts
// @access   Private

// router.get('/', auth, async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ date: -1 });
//     res.json(posts);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
