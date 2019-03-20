var Dentist = require('../models/Dentist');

/* METHODS FOR DENTIST ROUTES */

// FIND ALL dentists
exports.find_all_dentists = (req, res, next) => {
    Dentist.findAll()
        .then(dentists => {
            res.status(200).json({
                type: 'success',
                data: dentists
            });
        })
        .catch(err => {
            res.status(500).json({
                type: 'error',
                message: 'Internal Server Error',
                error: err
            });
        });
}

// FIND ONE dentist
exports.find_dentists_with_id = (req, res, next) => {
    Dentist.findAll({
        where: {
            dentistID: req.params.id
        }
    })
        .then(dentist => {
            res.status(200).json({
                type: 'success',
                data: dentist
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Dentist Not Found',
                error: err
            });
        });
}

// DELETE dentist
exports.delete_dentist = (req, res, next) => {
    Dentist.destroy({
        where: {
            dentistID: req.params.id
        }
    })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Dentist with DentistID=' + req.params.id + ' successfully deleted.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Dentist Not Found',
                error: err
            });
        });
}

// INSERT dentist
exports.insert_dentist = (req, res, next) => {
    var dentist = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "sex": req.body.sex,
        "username": req.body.username,
        "password": req.body.password,
        "role": req.body.role,
        "phone_number": req.body.phone_number,
        "card_number": req.body.card_number
    };
    Dentist.create(dentist)
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Dentist ' + JSON.stringify(dentist) + ' successfully inserted.'
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

// UPDATE dentist
exports.update_dentist = (req, res, next) => {
    var dentist = {
        "dentistID": req.params.id,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "sex": req.body.sex,
        "username": req.body.username,
        "password": req.body.password,
        "role": req.body.role,
        "phone_number": req.body.phone_number,
        "card_number": req.body.card_number
    };
    Dentist.update({
        first_name: dentist.first_name,
        last_name: dentist.last_name,
        sex: dentist.sex,
        username: dentist.username,
        password: dentist.password,
        role: dentist.role,
        phone_number: dentist.phone_number,
        card_number: dentist.card_number
    }, {
            where: {
                dentistID: dentist.dentistID
            }
        })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Dentist with id=' + dentist.dentistID + ' successfully updated.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Dentist Not Found',
                error: err
            });
        });
}
