require('dotenv').config()
const express = require('express');
const path = require('path');
const formidableMiddleware = require('express-formidable');
const Moment = require('moment-timezone');
const router = require('./routes/router');
const session = require('express-session');
const config = require('./config')



const app = express();
//use sessions for tracking logins
app.use(session({
    secret: 'mayra wins',
    resave: true,
    saveUninitialized: false,
   
  }));
// uso de formData
app.use(formidableMiddleware({
    encoding: 'utf-8',
    uploadDir: './public', // file to upload
    multiples: true, // req.files to be arrays of files

}));

/**
 * templates
 */
// uso de templates y acceso a su carpeta views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

/**
 * uso de carpeta public para archivos locales
 */
app.use('/public', express.static(__dirname + '/public'));

// uso de router
app.use('/', router);


// error
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next();
});
// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
// run server
app.listen(8000, () => {
    console.log(`Server run on port 8000\n  => \nCode by Emmanuel Lucio Urbina`);
})