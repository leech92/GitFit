const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const users = require("./routes/api/users");
const mealplans = require("./routes/api/mealplans");
const meals = require("./routes/api/meals");
const workouts = require("./routes/api/workouts");
const exercises = require("./routes/api/exercises");
const https = require("https")

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(___dirname, 'frontend', 'build', 'index.html'))
    })
}

mongoose
    .connect(db, {useNewURLParser: true})
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/mealplans", mealplans);
app.use("/api/meals", meals);
app.use("/api/workouts", workouts);
app.use("/api/exercises", exercises);


const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`Listening on port ${port}`)});