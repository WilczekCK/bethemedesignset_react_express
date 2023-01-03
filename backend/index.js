require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;
const secret = process.env.SECRET_KEY;

const isAuthorizedToRoute = (req, res, next) => {
    if (req.query.secret_key !== secret) {
        res.sendStatus(401);
    } else {
        next();
    }
}

app.get("/", (req, res) => {
  res.send(`Hello world!`);
});

app.get('/protected', isAuthorizedToRoute, (req, res) => {
    res.send('Authorized');
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});