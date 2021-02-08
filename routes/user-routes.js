const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/Manager');
const Meal1 = require('../models/Meal1');
const Dish = require('../models/Dish');

// @route     GET api/meal 
// @desc      Get all meal 
// @access    Private

router.get('/', auth, async (req, res) => {
    try {
      const meal1 = await Meal1.find({Cuisine:"Indian"})
      res.json(meal1);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// @route     GET api/dish detail
// @desc      Get all dish detail
// @access    Private

  router.get('/dish_dtl', auth, async (req, res) => {
    try {
      const dish = await Dish.find({Cuisine:"Indian"})
      res.json(dish);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  module.exports = router;