const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    height: {
        type: Number, 
        default: 0
    },
    weight: {
        type: Number, 
        default: 0
    },
    following: Array, 
    photo: {
        type: String, 
        default: 'https://git-fit-2.s3.amazonaws.com/gitfit_icon.jpg'
    }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;