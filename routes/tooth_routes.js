var express = require('express');
var router = express.Router();

// Require controller modules
var tooth_controller = require('../controllers/tooth_controller');

/* ROUTES */

router.route('/')
    .get(tooth_controller.find_all_teeth) // Find all teeth
    .post(tooth_controller.insert_tooth); // Insert tooth

router.route('/:id')
    .get(tooth_controller.find_tooth_with_id) // Find tooth with id
    .put(tooth_controller.update_tooth) // Update tooth with id
    .delete(tooth_controller.delete_tooth); // Delete tooth with id

    
module.exports = router;