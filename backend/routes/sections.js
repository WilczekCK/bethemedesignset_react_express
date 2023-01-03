module.exports = function(app, isAuthorizedToRoute){
    const Editor = require('../models/editor');

    app.route('/section')
        .get(async (req, res) => {
            const allEditors = await Editor.findAll();

            res.send( allEditors );
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