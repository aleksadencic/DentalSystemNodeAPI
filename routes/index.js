var express = require('express');
var router = express.Router();
var app = require('../app');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Dental system Node API' });
});

// Select all
router.get('/patients', function (req, res, next) {
  app.mysql.query('SELECT * FROM patient', (err, rows, fields) => {
    if (!err) {
      //console.log(rows);
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//Select one with ID
router.get('/patients/:id', function (req, res, next) {
  app.mysql.query('SELECT * FROM patient WHERE patientId = ?', [req.params.id], (err, rows, fields) => {
    if (!err) {
      //console.log(rows);
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//Delete one with ID
router.delete('/patients/:id', function (req, res, next) {
  app.mysql.query('DELETE FROM patient WHERE patientId = ?', [req.params.id], (err, rows, fields) => {
    if (!err) {
      //console.log(rows);
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//Insert patient
router.post('/patients', function (req, res, next) {
  var patient = {
    "PatientID": req.body.PatientID,
    "First_name": req.body.First_name,
    "Last_name": req.body.Last_name,
    "JMBG": req.body.JMBG,
    "Address": req.body.Address,
    "Number": req.body.Number,
    "Date_of_birth": req.body.Date_of_birth
  };
  app.mysql.query('INSERT INTO patient SET  ?', patient, (err, rows, fields) => {
    if (!err) {
      //console.log(rows);
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//Update patient
router.put('/patients/:id', function (req, res, next) {

  var patient = {
    "PatientID": req.body.PatientID,
    "First_name": req.body.First_name,
    "Last_name": req.body.Last_name,
    "JMBG": req.body.JMBG,
    "Address": req.body.Address,
    "Number": req.body.Number,
    "Date_of_birth": req.body.Date_of_birth
  };
  app.mysql.query(`UPDATE patient 
                   SET first_name = ?, last_name = ?, JMBG = ?, address = ?, number = ?, date_of_birth = ?
                   WHERE patientID = ?`, 
                   [req.body.First_name, req.body.Last_name, req.body.JMBG, req.body.Address, req.body.Number, req.body.Date_of_birth, req.params.id], (err, rows, fields) => {
    if (!err) {
      //console.log(rows);
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
