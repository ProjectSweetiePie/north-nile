// node modules
require('dotenv').config(); // handles our .env file

var config        = require('../config');
var express       = require('express');
var passport      = require('passport');
var session       = require('express-session');
var bodyParser    = require('body-parser');
var pg            = require('pg');
var localStrategy = require('passport-local').Strategy;
var facebookStrategy = require('passport-facebook').Strategy;

//local//

var routes = require('./routes');

// custom modules

var app             = express();

// database

var dbConnection    = require('./db/dbConnection.js');

dbConnection.dbInit();

// config

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended:true} ));
app.use( express.static('server/public') );

//express session

app.use(session( {
  secret: 'teal walls',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000,
    secure: false }
  }));

  //initializing passport//

  app.use( passport.initialize() );
  app.use( passport.session() );

  //passport happening here///


  passport.use(new facebookStrategy({
    clientID : process.env.facebookSecret,
    clientSecret : process.env.fbAppId,
    callbackURL : process.env.fbCallbackUrl,
  }, function(accessToken, refreshToken, profile, callback){
    pg.connect( dbConnection.dbConnectionString, function(err, client) {
      if ( err ) {
        console.log('Cannot connect to the database', err);
        callback( err );
      }
      var fbQuery = client.query('SELECT * FROM "account" WHERE "username" = $1', [profile.id]);

      fbQuery.on('error', function(err){
        console.log(err);
        callback(err);
      });

      fbQuery.on('row', function(row){
        var user = row;
      });

      fbQuery.on('end', function(){
        if(user){
          return callback(null, row);
        } else {
          var user = {
            username : profile.id,
            password : accessToken,
            email : profile.emails[0].value,
            name : profile.name.givenName + ' ' + profile.name.familyName,
          }
          // create new user
          var newFbUser = client.query('INSERT INTO "account" ("username", "password", "email_address", "contact_name") VALUES ($1, $2, $3, $4)', [user.username, user.password, user.email, user.name]);

          newFbUser.on('error', function(err){
            console.log('Problem creating new FB user' + err);
            callback(err);
          });

          newFbUser.on('end', function(){
            return callback(null, user);
          });
        }
      })

    })
  })
)


passport.use( 'local', new localStrategy({
  passReqToCallback: true,
  usernameField: 'username'
},

function( request, username, password, done ) {
  console.log('CHECKING PASSWORD');
  // This is where it gets stuck after non-existant user tries to login.
  pg.connect( dbConnection.dbConnectionString, function(err, client) {
    var user = {};
    var query = client.query('SELECT * FROM "account" WHERE "username" = $1', [username]);
    if ( err ) {
      done( err );
      console.log( err );
    }

    query.on('row', function(row) {
      console.log('User Object', row);
      user = row;
      console.log(password, user.password, 'password');
      if ( encryption.comparePassword(password, user.password) ) {
        console.log('a user has been found');
        done( null, user );
      } else {
        console.log('no matches found');
        done( null, false );
      }
    });

    query.on('end', function(){
      console.log('someone logged in');

      client.end();
      done( null );
    });

    query.on('error', function(err){
      console.log('Error retrieving account:', err);
    });
    if ( err ) {
      console.log(err);
    }
  });
}));

//authenticate users///

passport.serializeUser(function(user, done) {
  console.log('hit serializeUser', user);
  done( null, user.id );
});

passport.deserializeUser(function(id, passportDone) {
  console.log('hit deserializeUser');

  pg.connect(dbConnection.dbConnectionString, function(err, client, done) {
    if ( err ) {
      console.log(err);
    }
    var user = {};
    var query = client.query('SELECT * FROM "account" WHERE id=$1', [id]);

    query.on('row', function(row) {
      user = row;
      passportDone( null, user );
    });

    query.on('end', function() {
      client.end();
    });
  });
});

//routes
routes.initialize(app);

// server
var server = app.listen( config.port, function() {
  var port = server.address().port;
  if ( port == 3000 ) {
    console.log('Server started at: http://localhost:3000/');
    console.log('Press Ctrl + c to close connection.');
  }
});

module.exports = app;
