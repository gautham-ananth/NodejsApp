exports.index = function (req, res, next) {
    //res.render call the index file in views
    res.render('index', { title: 'Express' });
}