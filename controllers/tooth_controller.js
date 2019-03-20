var Tooth = require('../models/Tooth');

/* METHODS FOR TOOTH ROUTES */

// FIND ALL teeth
exports.find_all_teeth = (req, res, next) => {
    Tooth.findAll()
        .then(teeth => {
            res.status(200).json({
                type: 'success',
                data: teeth
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

// FIND ONE tooth
exports.find_tooth_with_id = (req, res, next) => {
    Tooth.findAll({
        where: {
            toothID: req.params.id
        }
    })
        .then(tooth => {
            res.status(200).json({
                type: 'success',
                data: tooth
            });

        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Tooth Not Found',
                error: err
            });
        });
};

// DELETE tooth
exports.delete_tooth = (req, res, next) => {
    Tooth.destroy({
        where: {
            toothID: req.params.id
        }
    })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Tooth with ToothID=' + req.params.id + ' successfully deleted.'
            });

        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Tooth Not Found',
                error: err
            });
        });
};

// INSERT tooth
exports.insert_tooth = (req, res, next) => {
    var tooth = {
        "toothID": req.body.toothID,
        "label": req.body.label
    };
    console.log(tooth);
    Tooth.create(
        tooth
    )
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Tooth ' + JSON.stringify(tooth) + ' successfully inserted.'
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

// UPDATE tooth
exports.update_tooth = (req, res, next) => {
    var tooth = {
        "toothID": req.params.id,
        "label": req.body.label
    };
    console.log(tooth);
    Tooth.update({
        label: tooth.label
    }, {
            where: {
                toothID: tooth.toothID
            }
        })
        .then(() => {
            res.status(200).json({
                type: 'success',
                text: 'Tooth with id=' + tooth.toothID + ' successfully updated.'
            });

        })
        .catch(err => {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Tooth Not Found',
                error: err
            });
        });
}