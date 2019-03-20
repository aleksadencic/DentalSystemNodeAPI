var Treatement = require('../models/Treatement');

/* METHODS FOR TREATEMENTS ROUTES */

// FIND ALL treatements
exports.find_all_treatements = (req, res, next) => {
    Treatement.findAll()
        .then(treatements => {
            res.status(200).json({
                type: 'success',
                data: treatements
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

// FIND ONE treatement
exports.find_treatement_with_id = (req, res, next) => {
    Treatement.findAll({
        where: {
            treatementID: req.params.id
        }
    })
        .then(treatement => {
            res.status(200).json({
                type: 'success',
                data: treatement
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Treatement Not Found',
                error: err
            });
        });
}


// DELETE treatement
exports.delete_treatement = (req, res, next) => {
    Treatement.destroy({
        where: {
            treatementID: req.params.id
        }
    })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Treatement with TreatementID=' + req.params.id + ' successfully deleted.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Treatement Not Found',
                error: err
            });
        });
}


// INSERT treatement
exports.insert_treatement = (req, res, next) => {
    var treatement = {
        "date": req.body.date,
        "note": req.body.note,
        "cost": req.body.cost,
        "patientID": req.body.patientID,
        "dentistID": req.body.dentistID
    };
    Treatement.create(treatement)
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Treatement ' + JSON.stringify(treatement) + ' successfully inserted.'
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


// UPDATE treatement
exports.update_treatement = (req, res, next) => {
    var treatement = {
        "treatementID": req.params.id,
        "date": req.body.date,
        "note": req.body.note,
        "cost": req.body.cost,
        "patientID": req.body.patientID,
        "dentistID": req.body.dentistID
    };
    Treatement.update({
        date: treatement.date,
        note: treatement.note,
        cost: treatement.cost,
        patientID: treatement.patientID,
        dentistID: treatement.dentistID
    }, {
            where: {
                treatementID: treatement.treatementID
            }
        })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Treatement with id=' + treatement.TreatementID + ' successfully updated.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Treatement Not Found',
                error: err
            });
        });
}

