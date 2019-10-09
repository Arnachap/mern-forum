const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Nom requis')
      .not()
      .isEmpty(),
    check('email', "Merci d'entrer une adresse email valide").isEmail(),
    check(
      'password',
      "Merci d'entrer un mot de passe d'au moins 6 charactères"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //Check if username already used
      let nameUsed = await User.findOne({ name });

      if (nameUsed) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Nom d'utilisateur indisponible" }] });
      }

      //Check if email already used
      let emailUsed = await User.findOne({ email });

      if (emailUsed) {
        return res
          .status(400)
          .json({ errors: [{ msg: "L'adresse email à déjà été utilisée" }] });
      }

      // Create new user
      user = new User({
        name,
        email,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Save user
      await user.save();

      // Create token
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
