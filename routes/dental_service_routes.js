var express = require('express');
var router = express.Router();

// Require controller modules
var dental_service_controller = require('../controllers/dental_service_controller');

/* ROUTES */

router.route('/')
    .get(dental_service_controller.find_all_dental_service) // find all dental_service
    .post(dental_service_controller.insert_dental_service); // insert dental_service

router.route('/:id')
    .get(dental_service_controller.find_dental_service_with_id) // find dental_service with id
    .put(dental_service_controller.update_dental_service) // update dental_service
    .delete(dental_service_controller.delete_dental_service); // delete dental_service with id

    
module.exports = router;