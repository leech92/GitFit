const express = require('express');
const router = express.Router();
// const passport = require('passport');
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

//created for testing but will leave for possible use
router.get('/', (req, res) => {
    Mealplan.find().then(mealplans => res.json(mealplans))
})

router.post('/',
    // passport.authenticate('jwt', { session: false }), 
    (req, res) => {
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

    newMealplan.save().then(mealplan => res.json(mealplan)).catch(err => res.json(err));
});

router.patch('/:id',
    // passport.authenticate('jwt', { session: false }), 
    (req, res) => {
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