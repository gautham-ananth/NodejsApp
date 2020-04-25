exports.getLanding = function (req, res, next) {
    //res.render call the index file in views
    res.render('landing', { title: 'Express' });
}