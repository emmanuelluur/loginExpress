const user = require('../models/userModels');
const Moment = require('moment-timezone');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// send vies
exports.userNew = (req, res)=>{
    res.render('user/register', {title:'myapp'});
}

exports.userProfile = (req, res)=>{
    if(req.session.usuario) {
        res.render('user/profile', {title:'myapp', usuario:req.session.usuario, ident:req.session.ident});
    } else {
        res.render('login', {title:'myapp'});
    }
}
// post methods
exports.createUser = (req, res) => {
    let nDate = Moment().tz('America/Matamoros').format();
    bcrypt.hash(req.fields.pass, saltRounds, function(err, hash) {
        user.findOne({ where: { username: req.fields.user } })
        .then((response) => {
            response != null ? 
            user.create({
                username: req.fields.user,
                pass: hash,
                user_create: nDate,
                createdAt: nDate,
                updatedAt: nDate
            })
            .then(() => {
                // Send created customer to client
                res.send('Guardado');
            })
            .catch(error => res.send(error)) : res.send(`${req.fields.user }  Ya registrado`);
        }).catch(err => { res.send(err) })
    });
}

exports.deleteUser = (req, res) => {
    let nDate = Moment().tz('America/Matamoros').format();
    user.destroy({ where: { id: req.fields.id } })
        .then((response) => {res.send("Usuario eliminado")}).catch(err => { res.send(err) })
}
