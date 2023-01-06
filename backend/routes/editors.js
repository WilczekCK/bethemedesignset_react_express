module.exports = function(app, isAuthorizedToRoute){
    app.route('/editors')
        .get((req, res) => {
            res.send('GET route');
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
        // PUT is not required here, maybe later.
}