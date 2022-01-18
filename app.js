const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const mealplans = require("./routes/api/mealplans");
const meals = require("./routes/api/meals");
const bodyParser = require('body-parser');

mongoose
    .connect(db, {useNewURLParser: true})
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

app.use("/api/users", users);
app.use("/api/mealplans", mealplans);
app.use("/api/meals", meals);

const port = process.env.PORT || 4000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});