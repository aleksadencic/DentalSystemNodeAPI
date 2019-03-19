var app = require('../app');

/* METHODS FOR DENTIST ROUTES */

// FIND ALL dentists
exports.find_all_dentists = (req, res, next) => {
    app.mysql.query('SELECT * FROM dentist', (err, rows, fields) => {
        if (!err) {
            res.status(200).json({
                type: 'success',
                count: rows.length,
                data: rows
            });
        } else {
            res.status(500).json({
                type: 'error',
                message: 'Internal Server Error',
                error: err
            });
        }
    });
}

// FIND ONE dentist
exports.find_dentists_with_id = (req, res, next) => {
    app.mysql.query('SELECT * FROM dentist WHERE dentistID = ?', [req.params.id], (err, row, fields) => {
        if (!err) {
            res.status(200).json({
                type: 'success',
                data: row
            });
        } else {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Dentist Not Found',
                error: err
            });
        }
    });
}

// DELETE dentist
exports.delete_dentist = (req, res, next) => {
    app.mysql.query('DELETE FROM dentist WHERE dentistID = ?', [req.params.id], (err, row, fields) => {
        if (!err) {
            res.status(200).json({
                type: 'success',
                message: 'Deleted dentist successfully'
            });
        } else {
            res.status(400).json({
                type: 'error',
                message: 'Bad Request. Dentist Not Found',
                error: err
            });
        }
    });
}

// INSERT dentist
exports.insert_dentist = (req, res, next) => {
    var dentist = {
        "DentistID": req.body.dentistId,
        "First_name": req.body.first_name,
        "Last_name": req.body.last_name,
        "Sex": req.body.sex,
        "Username": req.body.username,
        "Password": req.body.password,
        "Role": req.body.role,
        "Phone_number": req.body.phone_number,
        "Card_number": req.body.card_number
    };
    app.mysql.query('INSERT INTO dentist SET  ?', dentist, (err, row, fields) => {
        if (!err) {
            res.status(200).json({
                type: 'success',
                message: 'Inserted dentist successfully'
            });
        } else {
            res.status(400).json({
                type: 'error',
                message: err.message,
                error: err
            });
        }
    });
}

// UPDATE dentist
exports.update_dentist = (req, res, next) => {
    app.mysql.query(`UPDATE dentist 
                    SET first_name = ?, last_name = ?, sex = ?, username = ?, password = ?, role = ?, phone_number = ?, card_number = ?
                    WHERE dentistId = ?`,
        [req.body.first_name, req.body.last_name, req.body.sex, req.body.username, req.body.password, req.body.role, req.body.phone_number, req.params.card_number, req.params.id], (err, row, fields) => {
            if (!err) {
                res.status(200).json({
                    type: 'success',
                    message: 'Updated dentist successfully'
                });
            } else {
                res.status(400).json({
                    type: 'error',
                    message: 'Bad Request. Dentist Not Found',
                    error: err
                });
            }
        });
}
