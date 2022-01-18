const express = require('express');
const router = express.Router();
// const passport = require('passport');

const Meal = require('../../models/Meal');

//for mealplan show page show all meals
router.get('/mealplans/:mealplan_id', (req, res) => {
    Meal.find({mealplan: req.params.mealplan_id})
        .sort({ calories: 1,  })
        .then(meals => res.json(meals))
});

router.post('/', (req, res) => {
    const newMeal = new Meal({
        mealplan: req.mealplan.id,
        name: req.body.name,
        mealType: req.body.mealType,
        calories: req.body.calories,
        protein: req.body.protein,
        carbs: req.body.carbs,
        fat: req.body.fat,
        description: req.body.description,
        photo: req.body.photo,
        ingredients: req.body.photo
    })

    newMeal.save().then(meal => res.json(meal));
});

module.exports = router;