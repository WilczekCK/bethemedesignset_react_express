module.exports = function(app, isAuthorizedToRoute){
    const Editor = require('../models/editor');
    const Section = require('../models/section');

    app.route('/section')
        .get(async (req, res) => {
            const allEditors = await Section.findAll();

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