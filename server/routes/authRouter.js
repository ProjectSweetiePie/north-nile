var express=require('express');
var router=express.Router();
var path=require('path');
var session=require('express-session');
var passport=require('passport');
var bodyParser=require('body-parser');
var pg=require('pg');


router.get('/facebook', passport.authenticate('facebook', {scope: 'email'}));

router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/user',
  failureRedirect: '/fail'
}));

// route below will only be accessible once a user is logged in; ie tells users they are logged in
router.get('/', function(request, response, next){
  console.log('requested session information for:', request.user);
  if(request.user){
    var currentUser = {id: request.user.id, is_admin: request.user.is_admin, contact_name: request.user.contact_name, email_address: request.user.email_address, username: request.user.username};
    response.send(currentUser);
  } else {
    console.log('logged in?')
    response.send(request.user);
  }

});




module.exports = router;
