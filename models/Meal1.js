const mongoose = require('mongoose');
const mealSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'manager'
      },
    Cuisine: {
        type: String,
        required: true
    },
    Non_veg: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    Time_to_Cook: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = mongoose.model('Meal1', mealSchema);