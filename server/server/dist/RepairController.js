"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const RepairDB_1 = require("./RepairDB");
exports.router = express.Router();
exports.router.get('/', function (req, res) {
    RepairDB_1.getRepairs(function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});
exports.router.get('/:id', function (req, res) {
    RepairDB_1.getRepairsById(req.params.id, function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});
exports.router.post('/:id', function (req, res) {
    RepairDB_1.createRepair(req.params.id, req.body.repair_type, req.body.repair_cost, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
exports.router.put('/:id', function (req, res) {
    RepairDB_1.editRepair(req.params.id, req.body.repair_type, req.body.repair_cost, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
exports.router.delete('/:id', function (req, res) {
    RepairDB_1.deleteRepair(req.params.id, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
