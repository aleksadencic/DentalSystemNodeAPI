var express = require('express');
var router = express.Router();
var app = require('../app');

/* GET home page. */
router.get('/', function (req, res, next) {
  var dataPatients = [
    {route: '/patients', request: 'GET', explanation: 'Get all patients'},
    {route: '/patients/:id', request: 'GET', explanation: 'Get patient with id'},
    {route: '/patients', request: 'POST', explanation: 'Insert patient'},
    {route: '/patients/:id', request: 'PUT', explanation: 'Update patient'},
    {route: '/patients/:id', request: 'DELETE', explanation: 'Delete patient'},    
  ];
  var dataDentists = [
    {route: '/dentists', request: 'GET', explanation: 'Get all dentists'},
    {route: '/dentists/:id', request: 'GET', explanation: 'Get dentist with id'},
    {route: '/dentists', request: 'POST', explanation: 'Insert dentist'},
    {route: '/dentists/:id', request: 'PUT', explanation: 'Update dentist'},
    {route: '/dentists/:id', request: 'DELETE', explanation: 'Delete dentist'},
  ];
  var dataTeeth = [
    {route: '/teeth', request: 'GET', explanation: 'Get all teeth'},
    {route: '/teeth/:id', request: 'GET', explanation: 'Get tooth with id'},
    {route: '/teeth', request: 'POST', explanation: 'Insert tooth'},
    {route: '/teeth/:id', request: 'PUT', explanation: 'Update tooth'},
    {route: '/teeth/:id', request: 'DELETE', explanation: 'Delete tooth'},
  ];
  var dataDentalServices = [
    {route: '/dentalservices', request: 'GET', explanation: 'Get all dental services'},
    {route: '/dentalservices/:id', request: 'GET', explanation: 'Get dental service with id'},
    {route: '/dentalservices', request: 'POST', explanation: 'Insert dental service'},
    {route: '/dentalservices/:id', request: 'PUT', explanation: 'Update dental service'},
    {route: '/dentalservices/:id', request: 'DELETE', explanation: 'Delete dental service'},
  ];
  var dataInterventions = [
    {route: '/interventions', request: 'GET', explanation: 'Get all interventions'},
    {route: '/interventions/:id', request: 'GET', explanation: 'Get intervention with id'},
    {route: '/interventions', request: 'POST', explanation: 'Insert intervention'},
    {route: '/interventions/:id', request: 'PUT', explanation: 'Update intervention'},
    {route: '/interventions/:id', request: 'DELETE', explanation: 'Delete intervention'},
  ];
  var dataTreatements = [
    {route: '/treatements', request: 'GET', explanation: 'Get all treatements'},
    {route: '/treatements/:id', request: 'GET', explanation: 'Get treatement with id'},
    {route: '/treatements', request: 'POST', explanation: 'Insert treatement'},
    {route: '/treatements/:id', request: 'PUT', explanation: 'Update treatement'},
    {route: '/treatements/:id', request: 'DELETE', explanation: 'Delete treatement'},
  ];
  res.render('index', { title: 'Dental system Node API', dataPatients: dataPatients,
                                                         dataDentists: dataDentists,
                                                         dataTeeth: dataTeeth,
                                                         dataDentalServices: dataDentalServices,
                                                         dataInterventions: dataInterventions,
                                                         dataTreatements: dataTreatements });
});

module.exports = router;
