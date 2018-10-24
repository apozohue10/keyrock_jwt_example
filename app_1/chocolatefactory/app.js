var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var fs = require("fs");
var jwt = require("jsonwebtoken");
var http = require('http');
var app = express();
var queryContext = require('./context_operations/queryContext');
var subscriptions = require('./context_operations/subscription');

// Set more sockets to http connections
http.globalAgent.maxSockets = 40;

//IdM requirements 
var OAuth2 = require('./oauth2').OAuth2;
var config = require('./config');

//socket array for multiple data streams
var sockets = [];

// ejs view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "skjghskdjfhbqigohqdiouk"
}));

/* ContextBroker subscriptions variables  */
var subID; 
var subIds = [];

// Var to store token for the access to admin room
token_admin_rooms = undefined;

// IdM config data from config.js file
var client_id = config.client_id;
var client_secret = config.client_secret;
var idmURL = config.idmURL;
var callbackURL = config.callbackURL;

/*IdM User Data variables*/

var userName;
var userRole;

// Creates oauth library object with the IdM config data
var oa = new OAuth2(client_id,
                    client_secret,
                    idmURL,
                    '/oauth2/authorize',
                    '/oauth2/token',
                    callbackURL);

var verify_jwt = function(req, res, next) {
  jwt.verify(req.session.access_token, config.jwt_secret, function(err, userInfo) {
    if (err) {
      return res.render('notauthorized');
    } else {
      req.userInfo = userInfo;
      req.roles = req.userInfo.roles.map(elem => elem.id)
      console.log(req.userInfo)
      next();
    }
  })
}

var check_roles = function(req, res, next) {

  switch(req.path) {
    case '/admin-menu':
      next()
      break;
    case '/admin-map':
      if (req.roles.includes('factory_ownerCH')) {
        next()
      } else {
        return res.render('notauthorized');
      }
      break;
    case '/admin-rooms':
      if (req.roles.includes('factory_ownerCH')) {
        next()
      } else {
        return res.render('notauthorized');
      }
      break;
    case '/televisionroom':
      if (req.roles.includes('factory_ownerCH') || req.roles.includes('televisionroom')) {
        next()
      } else {
        return res.render('notauthorized');
      }
      break;
    case '/inventingroom':
      if (req.roles.includes('factory_ownerCH') || req.roles.includes('inventingroom')) {
        next()
      } else {
        return res.render('notauthorized');
      }
      break;
    case '/chocolateroom':
      if (req.roles.includes('factory_ownerCH') || req.roles.includes('chocolateroom')) {
        next()
      } else {
        return res.render('notauthorized');
      }
      break;
    default:
      return res.render('notauthorized');
  }
}

// Front page    
app.get('/', function (req, res) { 
  if(!req.session.access_token) {
    res.render('login');
  } else {
    res.redirect("/admin-menu");
  }
});

// Redirection Uri
app.get('/login', function(req, res){
  // Using the access code goes again to the IDM to obtain the access_token
  oa.getOAuthAccessToken(req.query.code, function (e, results){
    // Stores the access_token in a session cookie
    req.session.access_token = results.access_token;
    res.redirect('/admin-menu');
  });
});

// To get path to oauth server (IdM)
app.get('/auth', function(req, res){
  var path = oa.getAuthorizeUrl();
  res.redirect(path);
});

// Log Out form app
app.get('/logout', function(req, res){
  req.session.access_token = undefined;  
  res.redirect('/');
});

// To render admin menu
app.get('/admin-menu', verify_jwt, check_roles, function(req, res){
  res.render('adminMenu', {username: req.userInfo.username});
});

// To render admin map
app.get('/admin-map', verify_jwt, check_roles, function(req, res){
	res.render('roomMap', {username: req.userInfo.username});
});  

// To render admin rooms
app.get('/admin-rooms', verify_jwt, check_roles, function(req, res){
	res.render('roomsAdmin', {username: req.userInfo.username});
});

// To render television room
app.get('/televisionroom', verify_jwt, check_roles, function(req, res){
	res.render('televisionRoom', {username: req.userInfo.username});
});

// To render inventing room
app.get('/inventingroom', verify_jwt, check_roles, function(req, res){
  res.render('inventingRoom', {username: req.userInfo.username});
});

// To render chocolate room
app.get('/chocolateroom', verify_jwt, check_roles, function(req, res){
	res.render('chocolateRoom', {username: req.userInfo.username});
});

// To handle back button
app.get('/back', function(req, res){
  if(!req.session.access_token) {
    res.render('login');
  } else {
    res.redirect("/admin-menu");
  }
});

// Start server
var server = app.listen(4000, function () {
  console.log('App listening at 4000');
});

module.exports = app;
