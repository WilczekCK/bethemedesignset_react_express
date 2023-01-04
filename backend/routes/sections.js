
module.exports = function(app, isAuthorizedToRoute){
    const sectionController = require('../controllers/section.controller');

    app.route('/section')
        .get(async (req, res) => {
            const getAllRecords = await sectionController.allRecords;
            res.send( getAllRecords );
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