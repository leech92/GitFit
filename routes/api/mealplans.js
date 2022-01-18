const express = require('express');
const router = express.Router();
const passport = require('passport');

const Mealplan = require('../../models/Mealplan');

//for profile page mealplan preview
router.get('/users/:user_id', (req, res) => {
    Mealplan.find({user: req.params.user_id})
        .sort({ calories: 1 })
        .then(mealplans => res.json(mealplans))
});

//for mealplan show page
router.get('/:id', (req, res) => {
    Mealplan.findById(req.params.id)
        .then(mealplan => res.json(mealplan))
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newMealplan = new Mealplan({
        user: req.user.id,
        name: req.body.name,
        mealplanType: req.body.mealplanType,
        calories: req.body.calories,
        protein: req.body.protein,
        carbs: req.body.carbs,
        fat: req.body.fat,
        description: req.body.description
    })

    newMealplan.save().then(mealplan => res.json(mealplan));
});

module.exports = router;