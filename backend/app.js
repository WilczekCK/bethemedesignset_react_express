require("dotenv").config();

const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const express = require("express");
const config = require('./config');

const app = express();
app.use(rateLimit(config.rateLimit));
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
const isAuthorizedToRoute = (req, res, next) => {
    if (req.body.secret_key !== config.secretKey) {
        res.sendStatus(401);
    } else {
        next();
    }
}    

require('./routes/sections.route')(app, isAuthorizedToRoute);
require('./routes/editors.route')(app, isAuthorizedToRoute);


module.exports = app;