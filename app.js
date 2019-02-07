const
  createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  cookieSession = require('cookie-session'),
  keys = require('./config/keys'),
  fileUpload = require('express-fileupload'),
  passport = require('passport'),
  flash = require('express-flash'),
  bodyParser = require('body-parser'),
  mongoose = require("mongoose")

// mongoose
mongoose.connect(keys.mongoose.con, {useNewUrlParser: true})

// app setup
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// general
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'session',
  maxAge: 24 * 60 * 60 * 1000,
  secure: true,
  keys: [keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(fileUpload());

// routes
app.use('/', require('./routes/index')); // sample page

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
