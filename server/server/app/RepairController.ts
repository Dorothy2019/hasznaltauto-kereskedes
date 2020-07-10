import express = require("express");
import {getRepairs, getRepairsById, createRepair, editRepair, deleteRepair} from './RepairDB';
import { Matiere } from "./models";
import {Repair} from './models';

export let router = express.Router();

router.get('/', function (req, res) {
    getRepairs(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});

router.get('/:id',function(req,res){
    getRepairsById(req.params.id,function(err,rows){
        if(err){
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }

    })
});

router.post('/:id', function (req, res) {
    createRepair(req.params.id,req.body.repair_type,req.body.repair_cost,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.put('/:id', function (req, res) {
    
    editRepair(req.params.id, req.body.repair_type, req.body.repair_cost,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});


router.delete('/:id', function (req, res) {
   
    deleteRepair(req.params.id,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

