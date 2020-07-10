"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const MatiereDB_1 = require("./MatiereDB");
const MatiereDB_2 = require("./MatiereDB");
const MatiereDB_3 = require("./MatiereDB");
const MatiereDB_4 = require("./MatiereDB");
const MatiereDB_5 = require("./MatiereDB");
exports.router = express.Router();
// var bodyParser = require('body-parser');
// router.use(bodyParser.json());
// var Repair = require('./Repair');
exports.router.get('/matieres', function (req, res) {
    MatiereDB_1.getMatieres(function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            let list = [];
            for (let row of rows) {
                list.push(MatiereDB_1.createMatiereFromRow(row));
            }
            res.json(list);
        }
    });
});
exports.router.get('/matieres/:id', function (req, res) {
    MatiereDB_2.getMatieresbyId(req.params.id, function (err, rows) {
        // console.log(err);
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows[0]);
        }
    });
});
exports.router.post('/matieres', function (req, res) {
    MatiereDB_3.createMatiere(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
exports.router.put('/matieres/:id', function (req, res) {
    MatiereDB_4.updateMatiere(req.params.id, req.body.Type, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
exports.router.delete('/matieres/:id', function (req, res) {
    MatiereDB_5.deleteMatiere(req.params.id, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
