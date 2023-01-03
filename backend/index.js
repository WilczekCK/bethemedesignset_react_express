const app = require('./app');
const config = require('./config');

app.listen(config.serverPort, () => {
  console.log(`Server running at http://localhost:${config.serverPort}`);
});

module.export = app;