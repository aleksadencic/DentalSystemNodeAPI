var express = require('express');
var router = express.Router();

// Require controller modules
var intervention_controller = require('../controllers/intervention_controller');

/* ROUTES */

router.route('/')
    .get(intervention_controller.find_all_interventions) // find all interventions
    .post(intervention_controller.insert_intervention); // insert intervention

router.route('/:id')
    .get(intervention_controller.find_interventions_with_id) // find intervention with id
    .put(intervention_controller.update_intervention) // update intervention
    .delete(intervention_controller.delete_intervention); // delete intervention with id

    
module.exports = router;