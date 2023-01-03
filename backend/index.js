const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const config = require('./config');

const app = express();
const port = 3000;

const isAuthorizedToRoute = (req, res, next) => {
    if (req.query.secret_key !== config.secretKey) {
        res.sendStatus(401);
    } else {
        next();
    }
}

app.use(rateLimit(config.rateLimit));
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send(`Hello world!`);
});

app.get('/protected', isAuthorizedToRoute, (req, res) => {
    res.send('Authorized');
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});