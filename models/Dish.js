const mongoose = require('mongoose');
const dishSchema = mongoose.Schema({
    Cuisine: {
        type: String,
        required: true
    },
    Dish_Name: {
        type: String,
        required: true
    },
    Dish_Desc: {
        type: String,
        required: true
    },
    Dish_type: {
        type: String,
        required: true
    },
    Ing_Name: {
        type: String,
        required: true
    },
    Ing_qty: {
        type: Number,
        required: true
    },
    Ing_unit: {
        type: Number,
        required: true
    }
   
});

module.exports = mongoose.model('Dish', dishSchema);