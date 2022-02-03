const express = require('express');
const router = express.Router();
const passport = require('passport');
const Mealplan = require('../../models/Mealplan');
const validateMealplanInput = require('../../validation/mealplans')

//for profile page mealplan preview
router.get('/users/:user_id', (req, res) => {
    Mealplan.find({user: req.params.user_id})
        .sort({ calories: 1 })
        .then(mealplans => res.json(mealplans))
        .catch(err => res.status(404).json({ nomealplansfound: 'No meal plans found from that user'}))
});

//for mealplan show page
router.get('/:id', (req, res) => {
    Mealplan.findById(req.params.id)
        .then(mealplan => res.json(mealplan))
        .catch(err => res.status(404).json({ nomealplansfound: 'No meal plan found with that ID'}))
});

//created for testing but will leave for possible use
router.get('/', (req, res) => {
    Mealplan.find().then(mealplans => res.json(mealplans))
})

router.post('/',
    // passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        const { errors, isValid } = validateMealplanInput(req.body)

        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newMealplan = new Mealplan({
            user: req.body.user,
            name: req.body.name,
            mealplanType: req.body.mealplanType,
            calories: req.body.calories,
            protein: req.body.protein,
            carbs: req.body.carbs,
            fat: req.body.fat,
            description: req.body.description
    })

    newMealplan.save().then(mealplan => {
        res.json(mealplan)})
        .catch(err => {
            res.json(err)});
});

router.patch('/:id',
    // passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        const { errors, isValid } = validateMealplanInput(req.body)

        if (!isValid) {
            return res.status(400).json(errors)
        }
        
        Mealplan.findById(req.params.id)
            .then(mealplan => {
                mealplan.name = req.body.name
                mealplan.mealplanType = req.body.mealplanType
                mealplan.calories = req.body.calories
                mealplan.protein = req.body.protein
                mealplan.carbs = req.body.carbs
                mealplan.fat = req.body.fat
                mealplan.description = req.body.description

                mealplan.save().then(() => res.json(mealplan))
            })
    }
);

router.delete('/:id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Mealplan.findByIdAndDelete(req.params.id)
            .then(mealplan => res.json(mealplan))
    }
);

module.exports = router;