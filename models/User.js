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
    following: {
        user: {
            type: Schema.ObjectId, 
            ref: 'User'
        },
    }, 
    followers: {
        user: {
            type: Schema.ObjectId, 
            ref: 'User'
        }
    }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;