var Intervention = require('../models/Intervention');

/* METHODS FOR INTERVENTIONS ROUTES */

// FIND ALL interventions
exports.find_all_interventions = (req, res, next) => {
    Intervention.findAll()
        .then(interventions => {
            res.status(200).json({
                type: 'success',
                data: interventions
            });
        })
        .catch(err => {
            res.status(500).json({
                type: 'error',
                message: 'Internal Server Error',
                error: err
            });
        });
};

// FIND ONE intervention
exports.find_interventions_with_id = (req, res, next) => {
    Intervention.findAll({
        where: {
            interventionID: req.params.id
        }
    })
        .then(intervention => {
            res.status(200).json({
                type: 'success',
                data: intervention
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Intervention Not Found',
                error: err
            });
        });
}


// DELETE intervention
exports.delete_intervention = (req, res, next) => {
    Intervention.destroy({
        where: {
            interventionID: req.params.id
        }
    })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Intervention with InterventionID=' + req.params.id + ' successfully deleted.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Intervention Not Found',
                error: err
            });
        });
}


// INSERT intervention
exports.insert_intervention = (req, res, next) => {
    var intervention = {
        "description": req.body.description,
        "dentalServiceID": req.body.dentalServiceID,
        "toothID": req.body.toothID,
        "treatementID": req.body.treatementID
    };
    Intervention.create(intervention)
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Intervention ' + JSON.stringify(intervention) + ' successfully inserted.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: err.message,
                error: err
            });
        });
}


// UPDATE intervention
exports.update_intervention = (req, res, next) => {
    var intervention = {
        "interventionID": req.params.id,
        "description": req.body.description,
        "dentalServiceID": req.body.dentalServiceID,
        "toothID": req.body.toothID,
        "treatementID": req.body.treatementID
    };
    Intervention.update({
        description: intervention.description,
        dentalServiceID: intervention.dentalServiceID,
        toothServiceID: intervention.toothServiceID,
        treatementID: intervention.treatementID
    }, {
            where: {
                interventionID: intervention.interventionID
            }
        })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Intervention with id=' + intervention.interventionID + ' successfully updated.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Intervention Not Found',
                error: err
            });
        });
}

