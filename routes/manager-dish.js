const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');



const Dish = require('../models/Dish');

// @route     GET api/dish detail
// @desc      Get all dish detail
// @access    Private
router.get('/', auth, async (req, res) => {
    try {
      const dish = await Dish.find({Cuisine:"Indian"})
      res.json(dish);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// @route     POST api/dish
// @desc      Add new dish detail
// @access    Private
router.post(
    '/',
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
  
      const {Cuisine,Dish_Name,Dish_Desc,Dish_type,Ing_Name,Ing_qty,Ing_unit} = req.body;
  
      try {
        const newDish = new Dish({
           Cuisine,
           Dish_Name,
           Dish_Desc,
           Dish_type,
           Ing_Name,
           Ing_qty,
           Ing_unit
        });
  
        const dish = await newDish.save();
        res.json(dish);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

module.exports = router;