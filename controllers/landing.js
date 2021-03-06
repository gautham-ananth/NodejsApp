//models give access to sequelize methods
const models = require('../models');

exports.getLanding = function (req, res, next) {
    //res.render call the landing file in views
    res.render('landing', { title: 'Express' });
}

exports.submitLead = function (req, res, next) {
    //in app.js urlencode is used to retrieve the body inputs   console.log("Lead Email : ", req.body.leadEmail);
    return models.Lead.create({
        email: req.body.leadEmail,
    }).then(lead => {
        res.redirect("/leads")//redirect back to the landing page once submitted
    })
}

exports.showLeads = function (req, res, next) {
    return models.Lead.findAll().then(leads => {
        res.render('landing', { title: 'Express', leads: leads });
    })
}

exports.showLead = function (req, res, next) {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead', { lead: lead });
    })
}


exports.showEditLead = function (req, res, next) {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead/editLead', { lead: lead });
    })
}


exports.editLead = function (req, res, next) {
    req.params.lead_id
    req.body.leadEmail

    return models.Lead.update({
        email: req.body.leadEmail
    }, {
        where: {
            id: req.params.lead_id
        }
    }).then(result => {
        res.redirect('/lead/' + req.params.lead_id)
    })
}

exports.deleteLead = function (req, res, next) {

    return models.Lead.destroy(
        {
            where: {
                id: req.params.lead_id
            }
        }).then(result => {
            res.redirect('/leads')
        })
}

exports.deleteLeadJson = function (req, res, next) {
    return models.Lead.destroy(
        {
            where: {
                id: req.params.lead_id
            }
        }).then(result => {
            res.send({ msg: "Success" })
        })
}

