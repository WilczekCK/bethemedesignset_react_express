require("dotenv").config();

const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const express = require("express");


const app = express();
const router = express.Router();
const config = require('./config');


app.use(rateLimit(config.rateLimit));
app.use(cors());
app.use(helmet());

// Routes
const isAuthorizedToRoute = (req, res, next) => {
    console.log(req.body);
    if (req.body.secret_key !== config.secretKey) {
        res.sendStatus(401);
    } else {
        next();
    }
}    

require('./routes/sections')(app, isAuthorizedToRoute);


module.exports = app;