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
    data.description = validText(data.description) ? data.description : 0;

    if (!)
}