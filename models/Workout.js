const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    }, 
    photo: {
        type: String, 
        default: 'https://git-fit-2.s3.amazonaws.com/gitfit_icon.jpg'
    }

});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);