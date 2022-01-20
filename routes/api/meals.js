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

router.post('/', 
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newMeal = new Meal({
            mealplan: req.body.user,
            name: req.body.name,
            mealType: req.body.mealType,
            calories: req.body.calories,
            protein: req.body.protein,
            carbs: req.body.carbs,
            fat: req.body.fat,
            description: req.body.description,
            photo: req.body.photo,
            ingredients: req.body.ingredients
    })

    newMeal.save().then(meal => res.json(meal));
});

router.patch('/:id',
    // passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        Meal.findById(req.params.id)
            .then(meal => {
                meal.name = req.body.name
                meal.mealType = req.body.mealType
                meal.calories = req.body.calories
                meal.protein = req.body.protein
                meal.carbs = req.body.carbs
                meal.fat = req.body.fat
                meal.description = req.body.description
                meal.photo = req.body.photo
                meal.ingredients = req.body.ingredients

                meal.save().then(() => res.json(meal))
            })
    }
);

router.delete('/:id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Meal.findByIdAndDelete(req.params.id)
            .then(meal => res.json(meal))
    }
);

module.exports = router;