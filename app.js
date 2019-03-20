var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
const mysql = require('mysql');
const bodyparser = require('body-parser');

//Databases
const mysql_db = require('./db/mysql_db'); //sequelize

//Routers
var indexRouter = require('./routes/index');
var patientRouter = require('./routes/patient_routes');
var dentistRouter = require('./routes/dentist_routes');
var toothRouter = require('./routes/tooth_routes');
var dentalServiceRouter = require('./routes/dental_service_routes');
var interventionRouter = require('./routes/intervention_routes');
var treatementRouter = require('./routes/treatement_routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());

app.use('/', indexRouter);
app.use('/patients', patientRouter);
app.use('/dentists', dentistRouter);
app.use('/teeth', toothRouter);
app.use('/dentalservices', dentalServiceRouter);
app.use('/interventions', interventionRouter);
app.use('/treatements', treatementRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var mysql_connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dental_system',
  multipleStatements: true
});

mysql_connection.connect((err) => {
  if (!err) {
    console.log('MySQL connection succeded.');
  } else {
    console.log('MySQL connection failed. \n Error: ' + JSON.stringify(err, undefined, 2));
  }
});

mysql_db.authenticate()
  .then(() => console.log('Connected to MySQL database with sequelize'))
  .catch((err) => console.log('Error: ' + err))

//app.listen(3000, () => console.log('Express server is running at port 3000!'));

exports.mysql = mysql_connection;
exports.mysql_db = mysql_db;

module.exports = app;

