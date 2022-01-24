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
    ).catch(err => res.json(err))
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
                    password: req.body.password,
                    height: req.body.height,
                    weight: req.body.weight
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
            if(user.following.includes(req.body.profileId)) {
                let index = user.following.indexOf(req.body.profileId);
                user.following.splice(index, 1);  
                user.save().then(res.json(user))
            } else {
                user.following.push(req.body.profileId); 
                user.save().then(res.json(user)) 
            }
        }).catch(err => {
            return res.status(422).json
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
})


module.exports = router;

// brolicAnna 61e64a68d09b27b1fec83173
// dumplingTime 61ea187c2e2529d424c2305c
// prisoner diet 61ea5064a66759068c120f70
// dog life 61ea5565a66759068c120f73
// beginner at home 61ea5bfba66759068c120f76

// tashi 61e78094771326308d954d5e
// tashi greens only 61e9ffc04634e81bda75f887

// demo user greens only 61ea22c9cb63f185b7530645
 
// marco 61e8b5990a41587ae6dbcd2c
// chris 61e820d434256ef3da85279a
// marco's get brolic stay brolic 61ea290c73a9b4b275ed01ad
// anna's get bro stay bro 61e8a175c72774d60ce7df6d
// chris get ready for summer 61ea2cb0b7ef36fd8c661478

// hunter12 61e70d3c6bae522d67ab283f
// hunter12 hulk 61ea2d6bb7ef36fd8c66147c

// swoleanna 61e8eb74e7a5eec13fda73d0
// swoleanna dumpling time 61ea335af63789713a171f44
// swole anna every day life workout 61ea4d26a66759068c120f6a
// swole anna existing 61ea4ee1a66759068c120f6d

// pirate 61e8ecbde7a5eec13fda73e6
// pirate bubble tea 61ea3bb0f63789713a171f50