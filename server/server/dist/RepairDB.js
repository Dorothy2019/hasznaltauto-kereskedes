"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
function getRepairs(callback) {
    return db_1.connection.query('SELECT repair.ID, repair_type, repair_cost,repair_date, Type from repair inner join car on repair.car_ID=car.ID', callback);
}
exports.getRepairs = getRepairs;
function getRepairsById(id, callback) {
    return db_1.connection.query('SELECT repair.ID, repair_type, repair_cost, repair_date, Type from repair inner join car on repair.car_ID=car.ID where car.ID=?', [id], callback);
}
exports.getRepairsById = getRepairsById;
function createRepair(id, type, cost, callback) {
    return db_1.connection.query('Insert into repair(repair_type,repair_cost,car_ID) values(?,?,?)', [type, cost, id], callback);
}
exports.createRepair = createRepair;
function editRepair(id, description, cost, callback) {
    return db_1.connection.query("Update repair SET repair_type=?, repair_cost=? WHERE ID=?", [description, cost, id], callback);
}
exports.editRepair = editRepair;
function deleteRepair(id, callback) {
    return db_1.connection.query('Delete from repair WHERE ID = ?', id, callback);
}
exports.deleteRepair = deleteRepair;
