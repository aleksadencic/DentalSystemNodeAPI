var express = require('express');
var router = express.Router();
const cors = require('cors')

// Require controller modules
var patient_controller = require('../controllers/patient_controller');

/* ROUTES */

router.route('/')
    .get(cors(), patient_controller.find_all_patients) // GET request - find all patients
    .post(patient_controller.insert_patient); // POST request - insert patient

router.route('/:id')
    .get(patient_controller.find_patients_with_id) // GET request - find patient with id
    .put(patient_controller.update_patient) // PUT request - update patient
    .delete(patient_controller.delete_patient); // DELETE request - delete patient with id

    
module.exports = router;