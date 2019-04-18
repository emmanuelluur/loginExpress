const user = require('../models/userModels');
const Moment = require('moment-timezone');
const bcrypt = require('bcrypt');



exports.auth = (req, resp) => { 
    user.findOne({
        where : { username: req.fields.user }
    }).then(data => {
        if(data != null) {
            bcrypt.compare(req.fields.pass, data.pass, function(err, res) {
                // create session
                if (res==true ){
                    req.session.usuario = req.fields.user;
                    req.session.ident = data.id;
                    resp.send('/profile'); 
                } else {
                    resp.send('/login');
                }
                
            });
        } else {
            resp.send('/login');
        }
    }).catch((err)=>{ resp.send('/login')})
}

exports.login = (req, res) => {
    res.render('login', { title: 'login' })
}