var express = require('express');
var router = express.Router();
var app = require('../app');

/* GET home page. */
router.get('/', function (req, res, next) {
  var data = [
    {class: 'Patient', route: '/patients', request: 'GET', explanation: 'Get all patients'}
  ];
  res.render('index', { title: 'Dental system Node API', data: data });
});

module.exports = router;
