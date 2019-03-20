var Patient = require('../models/Patient');

/* METHODS FOR PATIENT ROUTES */

// FIND ALL patients
exports.find_all_patients = (req, res, next) => {
    Patient.findAll()
        .then(patients => {
            res.status(200).json({
                type: 'success',
                data: patients
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

// FIND ONE patient
exports.find_patients_with_id = (req, res, next) => {
    Patient.findAll({
        where: {
            patientID: req.params.id
        }
    })
        .then(patient => {
            res.status(200).json({
                type: 'success',
                data: patient
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Patient Not Found',
                error: err
            });
        });
}


// DELETE patient
exports.delete_patient = (req, res, next) => {
    Patient.destroy({
        where: {
            patientID: req.params.id
        }
    })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Patient with PatientID=' + req.params.id + ' successfully deleted.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Patient Not Found',
                error: err
            });
        });
}


// INSERT patient
exports.insert_patient = (req, res, next) => {
    var patient = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "jmbg": req.body.jmbg,
        "address": req.body.address,
        "number": req.body.number,
        "date_of_birth": req.body.date_of_birth
    };
    Patient.create(patient)
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Patient ' + JSON.stringify(patient) + ' successfully inserted.'
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


// UPDATE patient
exports.update_patient = (req, res, next) => {
    var patient = {
        "patientID": req.params.id,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "jmbg": req.body.jmbg,
        "address": req.body.address,
        "number": req.body.number,
        "date_of_birth": req.body.date_of_birth
    };
    Patient.update({
        first_name: patient.first_name,
        last_name: patient.last_name,
        jmbg: patient.jmbg,
        address: patient.address,
        number: patient.number,
        date_of_birth: patient.date_of_birth
    }, {
            where: {
                patientID: patient.patientID
            }
        })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Patient with id=' + patient.patientID + ' successfully updated.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Patient Not Found',
                error: err
            });
        });
}

