const app = require('./app');
const config = require('./config');

const isAuthorizedToRoute = (req, res, next) => {
    if (req.query.secret_key !== config.secretKey) {
        res.sendStatus(401);
    } else {
        next();
    }
}

app.listen(config.serverPort, () => {
  console.log(`Server running at http://localhost:${config.serverPort}`);
});

module.export = app;