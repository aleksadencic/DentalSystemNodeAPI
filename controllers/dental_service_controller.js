var DentalService = require('../models/DentalService');

/* METHODS FOR DENTAL SERVICE ROUTES */

// FIND ALL dental services
exports.find_all_dental_service = (req, res, next) => {
    DentalService.findAll()
        .then(dental_services => {
            res.status(200).json({
                type: 'success',
                data: dental_services
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

// FIND ONE dental service
exports.find_dental_service_with_id = (req, res, next) => {
    DentalService.findAll({
        where: {
            dental_serviceID: req.params.id
        }
    })
        .then(dental_service => {
            res.status(200).json({
                type: 'success',
                data: dental_service
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Dental service Not Found',
                error: err
            });
        });
}

// DELETE dental service
exports.delete_dental_service = (req, res, next) => {
    DentalService.destroy({
        where: {
            dental_serviceID: req.params.id
        }
    })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Dental service with Dental_serviceID=' + req.params.id + ' successfully deleted.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Dental service Not Found',
                error: err
            });
        });
}

// INSERT dental service
exports.insert_dental_service = (req, res, next) => {
    var dental_service = {
        "dental_serviceID": req.body.dentalServiceID,
        "name": req.body.name,
        "cost": req.body.cost,
        "vat": req.body.vat
    };
    DentalService.create(dental_service)
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Dental service ' + JSON.stringify(dental_service) + ' successfully inserted.'
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

// UPDATE dental service
exports.update_dental_service = (req, res, next) => {
    var dental_service = {
        "dental_serviceID": req.params.id,
        "name": req.body.name,
        "cost": req.body.cost,
        "vat": req.body.vat
    };
    DentalService.update({
        name: dental_service.name,
        cost: dental_service.cost,
        vat: dental_service.vat
    }, {
            where: {
                dental_serviceID: dental_service.dental_serviceID
            }
        })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Dental service with id=' + dental_service.dental_serviceID + ' successfully updated.'
            });
        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Dental service Not Found',
                error: err
            });
        });
}
