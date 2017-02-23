var indexRouter     = require('./routes/indexRouter.js');
var loginRouter     = require('./routes/loginRouter.js');
var authRouter      = require('./routes/authRouter.js');
var logoutRouter    = require('./routes/logoutRouter.js');
var registerRouter  = require('./routes/registerRouter.js');
var encryption      = require('../modules/encryption');
var resourceRouter  = require('./routes/resourceRouter.js');
var accountsRouter  = require('./routes/accountsRouter.js');
var uploadRouter    = require('./routes/uploadRouter.js');

// routes
// app.use('/accountsRouter', accountsRouter);

module.exports.initialize = function(app) {
    app.use('/resources', resourceRouter);
    app.use('/auth',      authRouter);
    app.use('/login',     loginRouter);
    app.use('/logout',    logoutRouter);
    app.use('/register',  registerRouter);
    app.use('/accounts',  accountsRouter);
    app.use('/upload',    uploadRouter);
    app.use('/',          indexRouter);
}
// DO NOT PUT ANY OTHER ROUTES UNDER indexRouter!!!
