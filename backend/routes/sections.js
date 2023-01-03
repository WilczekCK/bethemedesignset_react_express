module.exports = function(app, isAuthorizedToRoute){
    const sql = require('../controllers/mysql.controller');

    app.route('/section')
        .get(async (req, res) => {
            const isConnectedToSQL = await sql.isConnected();

            res.send( isConnectedToSQL );
        })
        .post(isAuthorizedToRoute, (req,res) => {
            res.send('POST route');
        })
        .delete(isAuthorizedToRoute, (req,res) => {
            res.send('DELETE route');
        })
        .patch(isAuthorizedToRoute, (req,res) => {
            res.send('PATCH route');
        })
        .put(isAuthorizedToRoute, (req,res) => {
            res.send('PUT route');
        })
}