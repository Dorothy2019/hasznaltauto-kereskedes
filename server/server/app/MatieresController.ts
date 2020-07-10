import express = require("express");
import { getMatieres, createMatiereFromRow } from "./MatiereDB";
import {getMatieresbyId} from './MatiereDB';
import {createMatiere} from './MatiereDB';
import {updateMatiere} from './MatiereDB';
import {deleteMatiere} from './MatiereDB';
import { Matiere } from "./models";

export let router = express.Router();
// var bodyParser = require('body-parser');
// router.use(bodyParser.json());
// var Repair = require('./Repair');



router.get('/matieres', function (req, res) {
    getMatieres(function (err, rows : Matiere[]) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            let list = [];
            for (let row of rows) {
                list.push(createMatiereFromRow(row))
            }

            res.json(list);
        }
    });
});

router.get('/matieres/:id', function (req, res) {
         getMatieresbyId(req.params.id, function (err, rows) {
       // console.log(err);
         if (err) {
             res.status(400).json(err);
         }
         else {
             res.json(rows[0]);
         }
     })
 });

router.post('/matieres', function (req, res) {
     createMatiere(req.body, function (err, count) {
         if (err) {
             res.status(400).json(err);
         }
         else {
             res.json(req.body);
         }
     });
});

router.put('/matieres/:id', function (req, res) {
     updateMatiere(req.params.id, req.body.Type, function (err, count) {
         if (err) {
             res.status(400).json(err);
         }
         else {
             res.json(req.body);
         }
     });
});

router.delete('/matieres/:id', function (req, res) {
     deleteMatiere(req.params.id, function (err, count) {
         if (err) {
             res.status(400).json(err);
         }
         else {
             res.json(req.body);
         }
     });
});

  













