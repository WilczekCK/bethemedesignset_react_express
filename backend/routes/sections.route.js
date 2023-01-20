
module.exports = function(app, isAuthorizedToRoute){
    const sectionController = require('../controllers/section.controller');

    app.route(['/sections', '/sections/:id'])
        .get(async (req, res) => {
            try {
                const results = await sectionController
                .setWhere ({...{where: req.params}, ...req.query})
                .setOrder ({...{where: req.params}, ...req.query})
                .setLimit ({...{where: req.params}, ...req.query})
                .setOffset({...{where: req.params}, ...req.query})
                .records;
            
                res.status(results.status || 200)
                .send(results);
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
            const results = await sectionController.create({...req.body, ...req.params});
            res.status(results.status).send(results);
        })
        .delete(isAuthorizedToRoute, async (req,res) => {
            const results = await sectionController.remove({...req.body, ...req.params});
            res.status(results.status).send(results);
        })
        .patch(isAuthorizedToRoute, async (req,res) => {
            const results = await sectionController.modify({...req.body, ...req.params});
            res.status(results.status).send(results);
        })
        // PUT is not required here, maybe later.
}