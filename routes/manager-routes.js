const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');

const Manager = require('../models/Manager');
const Meal1 = require('../models/Meal1');




// @route     POST api/meal
// @desc      Add new meal
// @access    Private
router.post(
    '/',
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
  
      const {Cuisine,Non_veg,image,Time_to_Cook,price} = req.body;
  
      try {
        const newMeal = new Meal1({
            Cuisine,
            Non_veg,
            image,
            Time_to_Cook,
            price
        });
  
        const meal = await newMeal.save();
        res.json(meal);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);
// @route     PUT api/meal
// @desc      update new meal
// @access    Private

router.put('/:id', auth, async (req, res) => {
    const {Cuisine,Non_veg,image,Time_to_Cook,price} = req.body;
   // Build meal object
    const mealFields = {};
    if (Cuisine) mealFields.Cuisine = Cuisine;
    if (Non_veg) mealFields.Non_veg = Non_veg;
    if (image) mealFields.image = image;
    if (Time_to_Cook) mealFields.Time_to_Cook = Time_to_Cook;
    if (price) mealFields.price = price;
    try {
      let meal1 = await Meal1.findById(req.params.id);
  
      if (!meal1) return res.status(404).json({msg: 'meal not found'});
  
      meal1 = await Meal1.findByIdAndUpdate(
        req.params.id,
        {$set: mealFields},
        {new: true},
      );
  
      res.json(meal1);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  });

// @route     DELETE api/meal/:id
// @desc      meal contact
// @access    Private

  router.delete('/:id', auth, async (req, res) => {
    try {
      let meal1 = await Meal1.findById(req.params.id);
  
      if (!meal1) return res.status(404).json({msg: 'meal not found'});
  
      
  
      await Meal1.findByIdAndRemove(req.params.id);
  
      res.json({msg: 'meal removed'});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


module.exports = router;