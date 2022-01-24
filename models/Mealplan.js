const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealplanSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    mealplanType: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: "",
    }, 
    photo: {
        type: String, 
        default: 'https://git-fit-2.s3.amazonaws.com/gitfit_icon.jpg'
    }
});

module.exports = Mealplan = mongoose.model('mealplan', MealplanSchema);