/*jshint node:true*/
//------------------------------------------------------------------------------
// Travel node.js starter application for Bluemix
//------------------------------------------------------------------------------
// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/');
var app = express();

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(session({ name:'Alchemy', secret: 'abcd', resave: false, saveUninitialized: true }));

//Basic Routing
app.get('/:id', routes.index);



//Change error handler
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message, error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message, error: {}
    });
});


// start server on the specified port and binding host
app.listen(appEnv.port, appEnv.bind, function() {

    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});

module.exports = app;
