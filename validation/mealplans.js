const Validator = require('validator');
const validText = require('./valid-text');
const validNumber = require('./valid-number');

module.exports = function validateMealplanInput(data) {
    let errors = {};
    
    data.name = validText(data.name) ? data.name : '';
    data.mealplanType = validText(data.mealplanType) ? data.mealplanType : '';
    data.calories = validNumber(data.calories) ? data.calories : 0;
    data.protein = validNumber(data.protein) ? data.protein : 0;
    data.carbs = validNumber(data.carbs) ? data.carbs : 0;
    data.fat = validNumber(data.fat) ? data.fat : 0;
    data.description = validText(data.description) ? data.description : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required"
    }

    if (Validator.isEmpty(data.mealplanType)) {
        errors.mealplanType = "Meal plan type is required"
    }

    if (Validator.isEmpty(data.calories)) {
        errors.calories = "Amount of calories is required"
    }

    if (Validator.isEmpty(data.protein)) {
        errors.protein = "Amount of protein is required"
    }

    if (Validator.isEmpty(data.carbs)) {
        errors.carbs = "Amount of carbs is required"
    }

    if (Validator.isEmpty(data.fat)) {
        errors.fat = "Amount of fat is required"
    }
}