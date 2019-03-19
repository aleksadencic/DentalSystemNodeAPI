var app = require('../app');

/* METHODS FOR PATIENT ROUTES */

// FIND ALL patients
exports.find_all_patients = (req, res, next) => {
    app.mysql.query('SELECT * FROM patient', (err, rows, fields) => {
        if (!err) {
            //console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }
    });
}

// FIND ONE patient
exports.find_patients_with_id = (req, res, next) => {
    app.mysql.query('SELECT * FROM patient WHERE patientId = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
}

// DELETE patients
exports.delete_patient = (req, res, next) => {
    app.mysql.query('DELETE FROM patient WHERE patientId = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
}

// INSERT patients
exports.insert_patient = (req, res, next) => {
    var patient = {
        "PatientID": req.body.PatientID,
        "First_name": req.body.First_name,
        "Last_name": req.body.Last_name,
        "JMBG": req.body.JMBG,
        "Address": req.body.Address,
        "Number": req.body.Number,
        "Date_of_birth": req.body.Date_of_birth
    };
    app.mysql.query('INSERT INTO patient SET  ?', patient, (err, rows, fields) => {
        if (!err) {
            //console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }
    });
}

// UPDATE patients
exports.update_patient = (req, res, next) => {
    var patient = {
        "PatientID": req.body.PatientID,
        "First_name": req.body.First_name,
        "Last_name": req.body.Last_name,
        "JMBG": req.body.JMBG,
        "Address": req.body.Address,
        "Number": req.body.Number,
        "Date_of_birth": req.body.Date_of_birth
    };
    app.mysql.query(`UPDATE patient 
                    SET first_name = ?, last_name = ?, JMBG = ?, address = ?, number = ?, date_of_birth = ?
                    WHERE patientID = ?`,
        [req.body.First_name, req.body.Last_name, req.body.JMBG, req.body.Address, req.body.Number, req.body.Date_of_birth, req.params.id], (err, rows, fields) => {
            if (!err) {
                //console.log(rows);
                res.send(rows);
            } else {
                console.log(err);
            }
        });
}