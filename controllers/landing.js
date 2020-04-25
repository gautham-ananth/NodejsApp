exports.getLanding = function (req, res, next) {
    //res.render call the index file in views
    res.render('landing', { title: 'Express' });
}

exports.submitLead = function (req, res, next) {
    //in app.js urlencode is used to retrieve the body inputs
   console.log("Lead Email : ", req.body.leadEmail);
   res.redirect("/");//redirect back to the landing page once submitted
}