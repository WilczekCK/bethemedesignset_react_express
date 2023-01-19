
module.exports = function(app, isAuthorizedToRoute){
    const editorController = require('../controllers/editor.controller');

    app.route(['/editors', '/editors/:id'])
        .get(async (req, res) => {
            try {
                const results = await editorController
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
            const results = await editorController.create(req.body);
            res.status(results.status).send(results);
        })
        .delete(isAuthorizedToRoute, async (req,res) => {
            const results = await editorController.remove(req.body);
            res.status(results.status).send(results);
        })
        .patch(isAuthorizedToRoute, async (req,res) => {
            const results = await editorController.modify(req.body);
            res.status(results.status).send(results);
        })
        // PUT is not required here, maybe later.
}