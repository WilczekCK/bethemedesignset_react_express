
module.exports = function(app, isAuthorizedToRoute){
    const sectionController = require('../controllers/section.controller');

    app.route('/sections')
        .get(async (req, res) => {
            try {
                const results = await sectionController
                .setWhere(req.query)
                .setOrder(req.query)
                .setLimit(req.query)
                .setOffset(req.query)
                .records;
            
                res.status( results.status )
                .send( results );
            } catch(err) {
                res.status(400)
                .send({
                    status: 400,
                    content: {
                        message: err.message
                    }
                });
            }
        })
        .post(isAuthorizedToRoute, async (req,res) => {
            const results = await sectionController.create(req.body);
            res.status(results.status).send(results);
        })
        .delete(isAuthorizedToRoute, async (req,res) => {
            const results = await sectionController.remove(req.body);
            res.status(results.status).send(results);
        })
        .patch(isAuthorizedToRoute, async (req,res) => {
            const results = await sectionController.modify(req.body);
            res.status(results.status).send(results);
        })
        // PUT is not required here, maybe later.


    app.route('/sections/:id')
        .get(async (req, res) => {
            const { id } = req.params;
            
            const results = await sectionController
            .setWhere(id)
            .records;

            console.log(results);
        })
}