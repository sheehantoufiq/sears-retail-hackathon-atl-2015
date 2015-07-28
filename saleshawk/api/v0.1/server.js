var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var util = require('util');
var passport = require('passport');
var session = require('express-session');


mongoose.connect('mongodb://localhost/saleshawk_test');

var app = express();
var TwitterStrategy = require('passport-twitter').Strategy;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./routes/endpoints'));

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new TwitterStrategy({
    consumerKey: "8cw5xu5LgboFhDly532qZbxtO",
    consumerSecret: "dfoF8oYgXJPXebGV9n0lOwuum7guC6usq02OoPRCSaQkdeeCmg",
    callbackURL: "http://localhost:3000/api/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

app.get('/api/auth/twitter', passport.authenticate('twitter'));
app.get('/api/auth/twitter/callback', passport.authenticate('twitter', {
	successRedirect: '/',
	failureRedirect: '/login'
}));
app.get('logout', function(req, res){
  req.logout();
  res.redirect('/');
});
/*
app.get('/', function(req, res){
	res.send('working');
});
*/

app.listen(3000);
console.log('API v0.1 is running on port 3000');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}