const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
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

const port = process.env.PORT || 4000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});