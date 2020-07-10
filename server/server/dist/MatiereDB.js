"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
function createMatiereFromRow(row) {
    let mat;
    mat = {
        carImg: row['Car_img'],
        id: row["ID"],
        licensePlate: row["License_plate"],
        type: row["Type"]
    };
    return mat;
}
exports.createMatiereFromRow = createMatiereFromRow;
function getMatieres(callback) {
    return db_1.connection.query('SELECT * from car', callback);
}
exports.getMatieres = getMatieres;
function getMatieresbyId(id, callback) {
    console.log(id);
    return db_1.connection.query('Select * from car where ID=?', [id], callback);
}
exports.getMatieresbyId = getMatieresbyId;
function createMatiere(matiereInst, callback) {
    return db_1.connection.query('Insert into car(Type, License_plate) values(?,?)', [matiereInst.type, matiereInst.licensePlate], callback);
}
exports.createMatiere = createMatiere;
function updateMatiere(id, type, callback) {
    return db_1.connection.query("Update car SET Type=? WHERE Id=?", [type, id], callback);
}
exports.updateMatiere = updateMatiere;
function deleteMatiere(id, callback) {
    db_1.connection.query('Delete from repair WHERE car_ID=?', id);
    return db_1.connection.query('Delete from car WHERE Id = ?', id, callback);
}
exports.deleteMatiere = deleteMatiere;
