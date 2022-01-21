const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const passport = require('passport');
const Workout = require('../../models/Workout');

router.get('/users/:user_id', (req,res) => {
    
    Workout.find({user: req.params.user_id})
        .then(workouts => res.json(workouts))
});

router.get('/', (req,res) => {
    Workout.find()
    .then(workouts => res.json(workouts))
});

router.get('/:id', (req,res) => {

    Workout.findById(req.params.id)
        .then(workout => res.json(workout))
});
//had to change to user to pull ID from body. I might
//need to change this later- Marco
router.post('/',
    (req, res) => {
        
        const newWorkout = new Workout({
            user: req.body.id,
            title: req.body.title,
            description: req.body.description
        })
        
    newWorkout.save().then(workout => res.json(workout))
})

router.patch('/:id',

    (req,res) => {

        Workout.findById(req.params.id)
            .then(workout => {
                workout.title = req.body.title,
                workout.description = req.body.description

                workout.save().then( () => res.json(workout))
    })
});

router.delete('/:id',

    (req,res) => {
        Workout.findByIdAndDelete(req.params.id)
            .then(workout => res.json(workout))
});

module.exports = router;