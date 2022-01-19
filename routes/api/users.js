const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/test", (req, res) => {
    res.json({ msg: "this is the user route" })
});

router.get("/", (req, res) => {
    User.find()
    .then(users => 
        res.json(users)
    )
})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({email: "Sorry, that email has already been used"});
            }else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then((user) => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    debugger

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: "Sorry, that email does not match any user"});
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email
                        };
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    sucess: true,
                                    token: "Bearer " + token
                                });
                            } 
                        )
                    }else {
                        return res.status(400).json({ password: "Sorry, that is an incorrect password" });
                    }
                })
        })
})

// router.patch('/:user_id', (req, res) => {  
//     User.findById(req.params.user_id)
//         .then(user => {
//             user.following.push(req.body.buddyId); 
//             user.save().then(res.json(user))
//         })
// })

router.patch('/:user_id', (req, res) => {
    User.findById(req.params.user_id)
        .then(user => {
            if(user.following.includes(req.body.buddyId)) {
                let index = user.following.indexOf(req.body.buddyId);
                user.following.splice(index, 1);  
                user.save().then(res.json(user))
            } else {
                user.following.push(req.body.buddyId); 
                user.save().then(res.json(user)) 
            }
        })
})

router.get('/:user_id', (req, res) => {  
    User.findById(req.params.user_id)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            return res.status(422).json
        })

    // User.find({user: req.body.id})
    //     .then(user => {
    //         res.json(user)
    //     })

        //"61e64a68d09b27b1fec83173"
        //"61e57f360d6723c1f1d1302e" 
        //they're not numbers, they're ObjectIds which can be turned into strings depending on _id or id
})


module.exports = router;
