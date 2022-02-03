const Validator = require('validator');
const validText = require('./valid-text');
const validNumber = require('./valid-number');

module.exports = function validateMealplanInput(data) {
    let errors = {};
    
    data.name = validText(data.name) ? data.name : '';
    data.mealplanType = validText(data.mealplanType) ? data.mealplanType : '';
    data.calories = validNumber(parseInt(data.calories)) ? data.calories : 0;
    data.protein = validNumber(parseInt(data.protein)) ? data.protein : 0;
    data.carbs = validNumber(parseInt(data.carbs)) ? data.carbs : 0;
    data.fat = validNumber(parseInt(data.fat)) ? data.fat : 0;
    data.description = validText(data.description) ? data.description : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required"
    }

    if (Validator.isEmpty(data.mealplanType)) {
        errors.mealplanType = "Meal plan type is required"
    }

    if (data.calories < 0) {
        errors.calories = "Amount of calories must be 0 or greater"
    }

    if (data.protein < 0) {
        errors.protein = "Amount of protein must be 0 or greater"
    }

    if (data.carbs < 0) {
        errors.carbs = "Amount of carbs must be a 0 or greater"
    }

    if (data.fat < 0) {
        errors.fat = "Amount of fat must be 0 or greater"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}