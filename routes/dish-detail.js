const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Dish = require('../models/Dish');

router.get('/', auth, async (req, res) => {
    try {
      const dish = await Dish.find({Cuisine:"Indian"})
      res.json(dish);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  module.exports = router;