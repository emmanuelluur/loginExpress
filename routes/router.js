const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const auth = require('../controllers/loginController');
router.get('/',(req, res)=> {
    res.render('index', {title: "myapp", message: "Ejemplo de login"});
})
router.get('/usuario/nuevo', user.userNew)
router.get('/login', auth.login)
router.get('/profile', user.userProfile)
router.post('/created', user.createUser );
router.post('/elimina/usuario', user.deleteUser );

router.post('/auth', auth.auth );
router.get('/logout', function (req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });
router.get('*',(req, res)=> {
    res.send('404');
})
module.exports = router