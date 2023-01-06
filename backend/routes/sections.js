
module.exports = function(app, isAuthorizedToRoute){
    const sectionController = require('../controllers/section.controller');

    app.route('/sections')
        .get(async (req, res) => {
            const results = await sectionController
                .setWhere(req.query)
                .setOrder(req.query)
                .setLimit(req.query)
                .setOffset(req.query)
                .records;
            
            res.send( results );
        })
        .post(isAuthorizedToRoute, async (req,res) => {
            const results = await sectionController.create(req.body);
            res.send(results);
        })
        .delete(isAuthorizedToRoute, async (req,res) => {
            const results = await sectionController.remove(req.body);
            res.send(results);
        })
        .patch(isAuthorizedToRoute, async (req,res) => {
            const results = await sectionController.modify(req.body);
            res.send(results);
        })
        // PUT is not required here, maybe later.
}