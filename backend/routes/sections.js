const app = require('../index.js');

app.route('/section')
    .get((req, res) => {
        res.send('GET section');
    })

module.exports = router;