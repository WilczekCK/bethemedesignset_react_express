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

module.exports = app;