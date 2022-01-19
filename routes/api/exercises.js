const express = require('express');
const router = express.Router();
const passport = require('passport');
const Exercise = require('../../models/Exercise');

router.get('/workouts/:workout_id', (req,res) => {
    Exercise.find({workout: req.params.workout_id})
        .then(workouts => res.json(workouts))
});

router.get('/', (req,res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
})

router.get('/:id', (req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
})

router.post('/',

    (req,res) => {
        const newExercise = new Exercise({
            workout: req.body.id,
            bodyPart: req.body.bodyPart,
            name: req.body.name,
            description: req.body.description,
            targetRep: req.body.targetRep,
            sets: req.body.sets,
            photoUrl: req.body.photoUrl
    })

    newExercise.save().then(exercise => res.json(exercise));
});

router.patch('/:id',

    (req,res) => {
        Exercise.findById(req.params.id)
            .then(exercise => {
                exercise.bodyPart = req.body.bodyPart,
                exercise.name = req.body.name,
                exercise.description = req.body.description,
                exercise.targetRep = req.body.targetRep,
                exercise.sets = req.body.sets,
                exercise.photoUrl = req.body.photoUrl

                exercise.save().then( () => res.json(exercise))
            })
    }
)

router.delete('/:id',
    
    (req,res) => {
        Exercise.findByIdAndDelete(req.params.id)
            .then(exercise => res.json(exercise))
});

module.exports = router;