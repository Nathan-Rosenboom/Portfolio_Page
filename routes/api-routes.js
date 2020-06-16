const Contact = require("../models/contact.js");

module.exports = function(app) {
    app.post("api/contact", function(req, res){
        Contact.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        })
        .then(function(){
            res.status(200);
        })
        .catch(function(){
            res.status(401).json(err);
        })
    })
}