// Registration for user
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../models/User');

// @route     POST api/users
// @desc      Regiter a user
// @access    Public
// This Goona check the the deatil

router.post(  
  '/',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters',
    ).isLength({min: 6}),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password} = req.body; //destructing 

    try {
      let user = await User.findOne({email}); // to check if user already exist

      if (user) {
        return res.status(400).json({msg: 'User already exists'});
      }

      user = new User({  // if does not exist create new user
        name,
        email,
        password,
      });

      // before saving it on database we have hash the password  with bcrypt
      // to encrypt the password we are using salt for decrypt we have gensalt and it return promise
      //10 is default This just basically determines how secure the password. 
      const salt = await bcrypt.genSalt(10); 

      // then we can take that salt and we can hash the password.
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };
// send back a  Jason web token to user. 

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000, //we can set our token to expire. all though it is not necessary
        },
        (err, token) => {
          if (err) throw err;
          res.json({token});
        },
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

module.exports = router;
