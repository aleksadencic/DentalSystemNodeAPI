var express = require('express');
var router = express.Router();
const cors = require('cors')

// Require controller modules
var dentist_controller = require('../controllers/dentist_controller');

/* ROUTES */

router.route('/')
    .get(cors(), dentist_controller.find_all_dentists) // find all dentists
    .post(cors(), dentist_controller.insert_dentist); // insert dentist

router.route('/:id')
    .get(cors(), dentist_controller.find_dentists_with_id) // find dentist with id
    .put(cors(), dentist_controller.update_dentist) // update dentist
    .delete(cors(), dentist_controller.delete_dentist); // delete dentist with id

    
module.exports = router;