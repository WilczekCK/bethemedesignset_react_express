require("dotenv").config();
const config = require('./config');

exports.secretKey = process.env.SECRET_KEY;
exports.serverPort = 3000;
exports.rate = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 30, // 30 calls
}
exports.cors = {
    //not yet
}
exports.mysql = {
    server: 'localhost:3306',
    user: 'root',
    password: 'rootpass'
}