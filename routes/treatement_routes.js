var express = require('express');
var router = express.Router();

// Require controller modules
var treatement_controller = require('../controllers/treatement_controller');

/* ROUTES */

router.route('/')
    .get(treatement_controller.find_all_treatements) // find all treatements
    .post(treatement_controller.insert_treatement); // insert treatement

router.route('/:id')
    .get(treatement_controller.find_treatement_with_id) // find treatement with id
    .put(treatement_controller.update_treatement) // update treatement
    .delete(treatement_controller.delete_treatement); // delete treatement with id

    
module.exports = router;